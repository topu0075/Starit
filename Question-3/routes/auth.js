const express = require("express");
const router = express.Router();

const { addNewStudent,inputValidation,addNewLibrarian,addNewBook} = require("../controllers/auth");


router.post("/newstudent",inputValidation, addNewStudent);
router.post("/newlibrarian",inputValidation, addNewLibrarian);
router.post("/newbook",addNewBook);

module.exports = router;
