## API-TEST-PRODEQUA

- Mongodb
- Express
- Nodejs

### INSTALL DEPENDENCIES AND START SERVER
- npm install
- npm run dev

### QUERIES

Get all inquiries
- GET: http://localhost:3000/inquiries

Update one inquiry
- PATCH: http://localhost:3000/inquiries/XXXXXXXXXXXXXXXXX

Delete one inquiry
- DELETE: http://localhost:3000/inquiries/XXXXXXXXXXXXXXXX

Create one inquiry
- POST: http://localhost:3000/inquiries
- Body Example:
{
	"completeName": "Some user",
	"charge": "developer",
	"businessName": "None",
	"message": "What about my thesis?",
	"status": "active",
	"contact": {
		"phone": 123987625,
		"email": "tito@gmail.com"
	},
	"need": {
		"needType": "Thesis",
		"description": ""
	}
}

Filter by inquiry's status
- http://localhost:3000/inquiries/filter/Atendido
- http://localhost:3000/inquiries/filter/Pendiente


Notes:
You should create your own DATABASE_URL on .env file

### DB Image

![Mongodb View](https://github.com/HaroldEnrique/api-test-prodequa/blob/main/images/db_1.png "MongoDB view")