const mongoose = require('mongoose');

const reqString = {
    type: String,
    required: true,
}

const contactSchema = mongoose.Schema(
    {
        //inquiryId: reqString,
        phone: {
            type: Number,
            required: true,
        },
        email: reqString,
    },
    {
        timestamps: true,
    }
)

const needSchema = mongoose.Schema(
    {
        //needId: reqString,
        needType: reqString,
        description: {
            type: String,
        }
    },
    {
        timestamps: true,
    }
)

const InquirySchema = mongoose.Schema(
    {
        completeName: reqString,
        charge: reqString,
        businessName: reqString,
        message: reqString,
        status: reqString,
        contact: contactSchema,
        need: needSchema,
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model("inquiries", InquirySchema);