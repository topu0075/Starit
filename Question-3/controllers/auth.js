const Student = require("../models/student");
const Librarian = require("../models/librarian");
const Book = require("../models/book");
   


exports.addNewStudent = (req, res) => {
    const student = new Student(req.body);
    student.save((err,student) => {
        if (err) {
            return res.status(400).json({
              error: "Phone number already exits"
            });
          }
        else{
            res.json({
                msg: "Student added succesfully"
            })
          }
    })
}

exports.addNewLibrarian = (req, res) => {
    const librarian = new Librarian(req.body);
    librarian.save((err,lib) => {
        if (err) {
            return res.status(400).json({
              error: "Phone number already exits"
            });
          }
        else{
            res.json({
                msg: "Librarian added succesfully"
            })
          }
    })
}

exports.addNewBook = (req, res) => {
    const book = new Book(req.body);
    book.save((err,boi) => {
        if (err) {
            return res.status(400).json({
              error: err
            });
          }
        else{
            res.json({
                msg: "Book added succesfully"
            })
          }
    })
}

exports.inputValidation = (req, res, next) => {
    const {name, mobile} = req.body;
     if(name==="") return res.status(400).json({error : "Name can't be empty"});
     if(mobile==="") return res.status(400).json({error : "Number can't be empty"});
     if(!isPhone(mobile)) return res.status(400).json({error : "Invalid mobile number"});
    
 next();

}

const isPhone = (phone) => {
    const phonePattern = /(^(\+88|88)?(01){1}[3-9]{1}\d{8})$/g;
    return phone.match(phonePattern) ? true : false;
};