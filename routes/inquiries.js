const express = require('express');
const router = express.Router();
const Inquiry = require('../models/Inquiry')

async function getInquiry(req, res, next) {
    let inquiry
    try {
        inquiry = await Inquiry.findById(req.params.inquiryId);
        if (inquiry == null){
            return res.status(400).json({message: 'Cannot find inquiry'});
        }
    } catch (error) {
        return res.status(500).json({message: error.message});
    }

    res.inquiry = inquiry;
    next()
}



router.get('/', async (req, res) => {
    //res.send('Welcome! This is inquiry')
    try {
        const inquiries = await Inquiry.find()
        res.json(inquiries);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

router.post('/', async (req, res) => {
    // res.send('Welcome! This is inquiry other')
    // console.log(req.body);
    // console.log(req.body.contact);
    // console.log(req.body.contact.email);

    const inquiry = new Inquiry({
        completeName: req.body.completeName,
        charge: req.body.charge,
        businessName: req.body.businessName,
        message: req.body.message,
        status: req.body.status,
        contact: {
            phone: req.body.contact.phone,
            email: req.body.contact.email,
        },
        need: {
            needType: req.body.need.needType,
            description: req.body.need.description
        }
    });

    try {
        const newInquiry = await inquiry.save();
        res.status(201).json(newInquiry);
    } catch (error) {
        res.status(400).json({message: error.message});
    }

});

// Getting One
router.get('/:inquiryId', getInquiry, (req, res) => {
    res.json(res.inquiry);
});

// Update One - status attribute
router.patch('/:inquiryId', getInquiry, async (req, res) => {
    if (req.body.status != null) {
        res.inquiry.status = req.body.status
    }

    try {
        const updateInquiry = await res.inquiry.save();
        res.json(updateInquiry);
    } catch (error) {
        res.status(400).json({message: error.message});
    }

});

// Delete One
router.delete('/:inquiryId', getInquiry, async (req, res) => {
    try {
        await res.inquiry.remove()
        res.json({message: 'Deleted inquiry'})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})


// Filter by status
router.get('/filter/:status', async (req, res) => {
    try {
        const inquiries = await Inquiry.find({ "status": {$eq: req.params.status}});
        res.json(inquiries);
        // if (inquiry == null){
        //     return res.status(400).json({message: 'Cannot find inquiry'});
        // }
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});


module.exports = router;