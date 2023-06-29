const express = require("express");
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const path = require("path");
const hbs = require("hbs");
const bodyParser = require("body-parser");
mongoose.connect('mongodb://127.0.0.1:27017/FMSDB7', { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();
const port = 80;



// schema created

// create schema for as user requirement

// create schema for user registration
const regSchema = new mongoose.Schema({
    userfirstname: {
        type: String,
        required: true
    },
    userlastname: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },
    // useremail: {
    //     type: String,
    //     required: true,
    //     unique: true
    // },
    // isVerified: {
    //      type: Boolean,
    //      default: false },
    // verificationToken: String,
    userpassword: {
        type: String,
        required: true
    },
    userconfirmpassword: {
        type: String,
        required: true
    }
});

// Create a Nodemailer transport
// const transport = nodemailer.createTransport({
//     service: 'Gmail',
//     auth: {
//       user: 'your_email@gmail.com',
//       pass: 'your_password'
//     }
//   });
// create schema for user login
const logSchema = new mongoose.Schema({
    email: { type: String, required: true },
    userloginpassword: {
        type: String,
        required: true
    }
});

// create schema for feedback
const feedSchema = new mongoose.Schema({
    feeduserfirstname: {
        type: String,
        required: true
    },
    feeduserlastname: {
        type: String,
        required: true
    },
    feeduseremail: {
        type: String,
        required: true,
        unique: true
    },
    feedusercity: {
        type: String,
        required: true
    },
    feeduserstate: {
        type: String,
        required: true
    },
    userfeedzip: {
        type: String,
        required: true
    },
    userfeedconcern: {
        type: String,
        required: true
    }
});


// cerated schema for admin work

// create schema for login admin
const adminSchema = new mongoose.Schema({
    adminemail: {
        type: String,
        required: true
    },
    adminpassword: {
        type: String,
        required: true
    }
});


// create schema for adding the employee
const addSchema = new mongoose.Schema({
    FirstName: String,
    LastName: String,
    EmailId: String,
    MobileNumber: String,
    Gender: String,
    PoliceStation: String,
    City: String,
    State: String,
    ZipCode: String,
    Allotment: String,
    Status: String,
    Rank: String,
    Transfers: String,
    Promotion: String,
    AssignedWork: String,
    StartingTime: String,
    EndingTime: String,
    Date: Date,
    WorkStatus: String,
    Location: String,
    CreateUserId: String,
});


const mySchema = new mongoose.Schema({
    City: String,
    State: String,
    Allotment: String,
    Transfers: String,
    Promotion: String,
    Concern: String,
    Gender: String,
    Status: String,
    Achievement: String,
    FirstName: String,
    LastName: String,
    PoliceStation: String,
    Rank: String,
    Suggetion: String,
    UserId: String,
    ZipCode: String,
    WorkStatus: String,
    EmailId: String,
    AssignedWork: String

});
const DutySchema = new mongoose.Schema({
    City: String,
    State: String,
    Allotment: String,
    Transfers: String,
    Promotion: String,
    Concern: String,
    Gender: String,
    Status: String,
    Achievement: String,
    FirstName: String,
    LastName: String,
    PoliceStation: String,
    Rank: String,
    Suggetion: String,
    UserId: String,
    ZipCode: String,
    WorkStatus: String,
    EmailId: String,
    AssignedWork: String,
    Location: String,
    Date: String,
    Startingtime: String,
    Endingtime: String,
    
});




const searchSchema = new mongoose.Schema({
    searchdata: {
        type: String,
        required: true
    }
});





// schema modules

// Define a model for the collection
const adminpsdata = mongoose.model('adminpsdata', mySchema);
const adminabpsdata = mongoose.model('adminabpsdata', mySchema);
const adminagpsdata = mongoose.model('adminagpsdata', mySchema);
const adminbgpsdata = mongoose.model('adminbgpsdata', mySchema);
const admingnpsdata = mongoose.model('admingnpsdata', mySchema);
const admingppsdata = mongoose.model('admingppsdata', mySchema);
const adminmpnpsdata = mongoose.model('adminmpnpsdata', mySchema);
const adminrbpsdata = mongoose.model('adminrbpsdata', mySchema);


const ratibadpsassignedwork = mongoose.model('ratibadpsassignedwork', DutySchema);


const ratibadpsduty = mongoose.model('ratibadpsduty', DutySchema);
const ashokagardenpsduty = mongoose.model('ashokagardenpsduty', DutySchema);
const mpnagarpsduty = mongoose.model('mpnagarpsduty', DutySchema);
const bairagadhpsduty = mongoose.model('bairagadhpsduty', DutySchema);
const aishbagpsduty = mongoose.model('aishbagpsduty', DutySchema);
const govindpurapsduty = mongoose.model('govindpurapsduty', DutySchema);
const gandhinagarpsduty = mongoose.model('gandhinagarpsduty', DutySchema);

const reg = mongoose.model('reg', regSchema);
const log = mongoose.model('log', logSchema);
const feed = mongoose.model('feed', feedSchema);

// created schema for admin works
const admin = mongoose.model('admin', adminSchema);


const add = mongoose.model('add', addSchema);


const search = mongoose.model('search', searchSchema);


// Use statics fils

app.use('/static', express.static('static')); // For serving static files
app.use('/static/img', express.static('img'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('view engine', 'hbs') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
    const params = {}
    res.status(200).render('index', params);
})
app.get('/views/service', (req, res) => {
    const params = {}
    res.status(200).render('service', params);
})
app.get('/service', (req, res) => {
    const params = {}
    res.status(200).render('service', params);
})
app.get('/views/about', (req, res) => {
    const params = {}
    res.status(200).render('about', params);
})
app.get('/views/structure', (req, res) => {
    const params = {}
    res.status(200).render('structure', params);
})
app.get('/views/who_is_who', (req, res) => {
    const params = {}
    res.status(200).render('who_is_who', params);
})

app.get('/views/history', (req, res) => {
    const params = {}
    res.status(200).render('about', params);
})
app.get('/user_history', (req, res) => {
    const params = {}
    res.status(200).render('about', params);
})

app.get('/views/admin', (req, res) => {
    const params = {}
    res.status(200).render('history', params);
})

app.get('/views/feedback', (req, res) => {
    const params = {}
    res.status(200).render('feedback', params);
})

app.get('/helpline', (req, res) => {
    const params = {}
    res.status(200).render('helpline', params);
})
app.get('/views/helpline', (req, res) => {
    const params = {}
    res.status(200).render('helpline', params);
})
app.get('/registration', (req, res) => {
    const params = {}
    res.status(200).render('./registration', params);
})
app.get('/views/home', (req, res) => {
    const params = {}
    res.status(200).render('./user_deshboard.hbs', params);
})
app.get('/views/user_deshboard', (req, res) => {
    const params = {}
    res.status(200).render('./user_deshboard.hbs', params);
})
app.get('/views/admin_add_employee', (req, res) => {
    const params = {}
    res.status(200).render('./admin_add_employee.hbs', params);
})
app.get('/views/admin_update_employee', (req, res) => {
    const params = {}
    res.status(200).render('./admin_update_employee.hbs', params);
})
app.get('/views/admin_remove_employee', (req, res) => {
    const params = {}
    res.status(200).render('./admin_remove_employee.hbs', params);
})
app.get('/feedback', (req, res) => {
    const params = {}
    res.status(200).render('./feedback.hbs', params);
})
// app.get('/views/assigned_work', (req, res) => {
//     const params = {}
//     res.status(200).render('availability.hbs', params);
// })
app.get('/views/assigned_work', async(req, res) => {
    try {
        const data = await add.find({}).exec();
        res.render('availability.hbs', { data });
        // res.send(data);
    } catch (err) {
        console.log(`Error retrieving collection data: ${err}`);
        res.status(500).json({ error: 'Internal server error' });
    }
})
app.get('/progress', (req, res) => {
    const params = {}
    res.status(200).render('progress', params);
})
app.get('/views/map', (req, res) => {
    const params = {}
    res.status(200).render('map', params);
})
app.get('/map', (req, res) => {
    const params = {}
    res.status(200).render('map', params);
})
// app.get('/userlogin', (req, res) => {
//     const params = {}
//     res.status(200).render('', params);
// })
app.get('/views/user_history', async(req, res) => {
    try {
        const data = await add.find({}).exec();
        res.render('availability.hbs', { data });
        // res.send(data);
    } catch (err) {
        console.log(`Error retrieving collection data: ${err}`);
        res.status(500).json({ error: 'Internal server error' });
    }
    
})
app.get('/views/logout', (req, res) => {
    const params = {}
    res.status(200).render('index.hbs', params);
})
app.get('/views/availability', async (req, res) => {
    try {
        const data = await add.find({}).exec();
        res.render('availability.hbs', { data });
        // res.send(data);
    } catch (err) {
        console.log(`Error retrieving collection data: ${err}`);
        res.status(500).json({ error: 'Internal server error' });
    }
})

app.get('/views/progress', (req, res) => {
    const params = {}
    res.status(200).render('progress', params);
})
app.get('/views/crimeChart2', (req, res) => {
    const params = {}
    res.status(200).render('crimeChart2.hbs', params);
})
app.get('/views/crimeChart3', (req, res) => {
    const params = {}
    res.status(200).render('crimeChart3.hbs', params);
})
app.get('/views/crimeChart4', (req, res) => {
    const params = {}
    res.status(200).render('crimeChart4.hbs', params);
})
// /userlogin
app.get('/userlogin', (req, res) => {
    const params = {}
    res.status(200).render('admin', params);
})
app.get('/views/crimeChart', (req, res) => {
    const params = {}
    res.status(200).render('crimeChart', params);
})
// app.get('/views/police_station', (req, res) => {
//     const params = {}
//     res.status(200).render('police_station', params);
// })

// app.get('/views/admin_add_employee', async (req, res) => {
//     try {
//         // Retrieve all collection data
//         const data = await add.find({}).exec();

//         // Send the collection data as a JSON response
//         //   res.send(data);
//         res.render('user_history', { data });
//     } catch (err) {
//         console.log(`Error retrieving collection data: ${err}`);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });

// app.get('/views/ab_police_station', async (req, res) => {
//     try {
//         // Retrieve all collection data
//         const data = await adminpsdata.find({}).exec();

//         // Send the collection data as a JSON response
//         // res.send(data);
//         res.render('police_station.hbs', { data });
//     } catch (err) {
//         console.log(`Error retrieving collection data: ${err}`);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });


// app.get('/views/ab_police_station', async (req, res) => {
//     try {
//         // Retrieve all collection data
//         const data = await adminabpsdata.find({}).exec();
//         // Send the collection data as a JSON response
//         // res.send(data);
//         res.render('police_station.hbs', { data });
//     } catch (err) {
//         console.log(`Error retrieving collection data: ${err}`);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });
app.get('/views/ab_police_station', async (req, res) => {
    try {
        // Retrieve all collection data
        const data = await adminabpsdata.find({}).exec();
        // Send the collection data as a JSON response
        // res.send(data);
        res.render('police_station.hbs', { data });
    } catch (err) {
        console.log(`Error retrieving collection data: ${err}`);
        res.status(500).json({ error: 'Internal server error' });
    }
});
app.get('/views/ag_police_station', async (req, res) => {
    try {
        const data = await adminagpsdata.find({}).exec();
        res.render('police_station.hbs', { data });
    } catch (err) {
        console.log(`Error retrieving collection data: ${err}`);
        res.status(500).json({ error: 'Internal server error' });
    }
});
app.get('/views/bg_police_station', async (req, res) => {
    try {
        const data = await adminbgpsdata.find({}).exec();
        res.render('police_station.hbs', { data });
    } catch (err) {
        console.log(`Error retrieving collection data: ${err}`);
        res.status(500).json({ error: 'Internal server error' });
    }
});
app.get('/views/gn_police_station', async (req, res) => {
    try {
        const data = await admingnpsdata.find({}).exec();
        res.render('police_station.hbs', { data });
    } catch (err) {
        console.log(`Error retrieving collection data: ${err}`);
        res.status(500).json({ error: 'Internal server error' });
    }
});
app.get('/views/gp_police_station', async (req, res) => {
    try {
        const data = await admingppsdata.find({}).exec();
        res.render('police_station.hbs', { data });
    } catch (err) {
        console.log(`Error retrieving collection data: ${err}`);
        res.status(500).json({ error: 'Internal server error' });
    }
});
app.get('/views/mpn_police_station', async (req, res) => {
    try {
        const data = await adminmpnpsdata.find({}).exec();
        res.render('police_station.hbs', { data });
    } catch (err) {
        console.log(`Error retrieving collection data: ${err}`);
        res.status(500).json({ error: 'Internal server error' });
    }
});
app.get('/views/rb_police_station', async (req, res) => {
    try {
        const data = await adminrbpsdata.find({}).exec();
        res.render('police_station.hbs', { data });
    } catch (err) {
        console.log(`Error retrieving collection data: ${err}`);
        res.status(500).json({ error: 'Internal server error' });
    }
});
app.get('/availability', async (req, res) => {
    try {
        const data = await add.find({}).exec();
        res.render('availability.hbs', { data });
        // res.send(data);
    } catch (err) {
        console.log(`Error retrieving collection data: ${err}`);
        res.status(500).json({ error: 'Internal server error' });
    }
});
app.get('/availability', async (req, res) => {
    try {
        const data = await ashokagardenpsduty.find({}).exec();
        res.render('availability.hbs', { data });
        // res.send(data);
    } catch (err) {
        console.log(`Error retrieving collection data: ${err}`);
        res.status(500).json({ error: 'Internal server error' });
    }
});
app.get('/availability', async (req, res) => {
    try {
        const data = await mpnagarpsduty.find({}).exec();
        res.render('availability.hbs', { data });
        // res.send(data);
    } catch (err) {
        console.log(`Error retrieving collection data: ${err}`);
        res.status(500).json({ error: 'Internal server error' });
    }
});
app.get('/availability', async (req, res) => {
    try {
        const data = await bairagadhpsduty.find({}).exec();
        res.render('availability.hbs', { data });
        // res.send(data);
    } catch (err) {
        console.log(`Error retrieving collection data: ${err}`);
        res.status(500).json({ error: 'Internal server error' });
    }
});
app.get('/availability', async (req, res) => {
    try {
        const data = await aishbagpsduty.find({}).exec();
        res.render('availability.hbs', { data });
        // res.send(data);
    } catch (err) {
        console.log(`Error retrieving collection data: ${err}`);
        res.status(500).json({ error: 'Internal server error' });
    }
});
app.get('/availability', async (req, res) => {
    try {
        const data = await govindpurapsduty.find({}).exec();
        res.render('availability.hbs', { data });
        // res.send(data);
    } catch (err) {
        console.log(`Error retrieving collection data: ${err}`);
        res.status(500).json({ error: 'Internal server error' });
    }
});
app.get('/availability', async (req, res) => {
    try {
        const data = await gandhinagarpsduty.find({}).exec();
        res.render('availability.hbs', { data });
        // res.send(data);
    } catch (err) {
        console.log(`Error retrieving collection data: ${err}`);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/assigned_work', async (req, res) => {
    try {
        const data = await add.find({}).exec();
        res.render('assigned_work.hbs', { data });
        // res.send(data);
    } catch (err) {
        console.log(`Error retrieving collection data: ${err}`);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// app.get('/id', async (req, res) => {
//     try {
//         const data = await add.find({}).exec();
//         res.render('assigned_work.hbs', { data });
//         // res.send(data);
//     } catch (err) {
//         console.log(`Error retrieving collection data: ${err}`);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });


// app.get('/views/admin_update_employee', async (req, res) => {
//     try {
//         const data = await add.find({User Id}).exec();
//         res.render('assigned_work.hbs', { data });
//         // res.send(data);
//     } catch (err) {
//         console.log(`Error retrieving collection data: ${err}`);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });




// All of the post request
// started from user
app.post('/userreg', (req, res) => {
    const { userfirstname, userlastname, useremail, userpassword, userconfirmpassword } = req.body;
    if (userpassword === userconfirmpassword) {
        var regData = new reg(req.body);
        regData.save();
        res.status(200).render('user_deshboard.hbs');
        //   res.send(`Signup successful for ${userfirstname} (${useremail})`);
    } else {

        res.status(400).send('Password and confirm password are not equal');
    }
});





// app.post('/search', (req, res) => {
//     const name = req.body.searchData;
//     add.find({ name: name }, (err, users) => {
//         if (err) {
//           console.log(err);
//         //   res.render('search', { error: 'An error occurred while searching for users.' });
//           return;
//         }
//         res.render('search', { users: users, searchPerformed: true });
//       });
//     var searchData = new search(req.body);
//     searchData.save().then(() => {
//         //res.status(200).render('user_deshboard.hbs');
//         res.send("This item has been saved to the database");
//     }).catch(() => {
//         res.status(400).send("item was not saved to the databse")
//     })
// })

app.post('/userlogin', (req, res) => {
    var loginData = new log(req.body);
    loginData.save().then(() => {
        res.status(200).render('user_deshboard.hbs');
        // res.send("This item has been saved to the database");
    }).catch(() => {
        res.status(400).send("item was not saved to the databse")
    })
})



    //   app.post('/userlogin', (req, res) => {
    //     const userInput = req.body.adminemail; // assuming the input field has a                 "name" attribute
    //     reg.findOne({ email : 'harshjoshi875@gmail.com' })
    //       .then(data => {
    //         if (!data) {
    //           // User not found in database
    //            res.send("data not found");

    //         //   res.render('result', { isEqual: false });
    //         } else {
    //           const databaseName = data.email;
    //         //   const isEqual = (userInput === databaseName);
    //           if (userInput === databaseName) {
    //             var logData = new log(req.body);
    //             logData.save();
    //             res.send("This item has been saved to the database");

    //           }else {
    //                 res.status(400).send('email not found');
    //             }
    //         }
    //       })
    //       .catch(err => {
    //         console.error(err);
    //         res.render('error');
    //       });
    //   });

        // var loginData = new log(req.body);
        // loginData.save().then(() => {
        //     res.status(200).render('user_deshboard.hbs');
        //     // res.send("This item has been saved to the database");
        // }).catch(() => {
        //     res.status(400).send("item was not saved to the databse")
        // })
   // })

app.post('/feedback', (req, res) => {
    var feedbackData = new feed(req.body);
    feedbackData.save().then(() => {
        res.status(200).render('index.hbs');
        // res.send("This item has been saved to the database");
    }).catch(() => {
        res.status(400).send("item was not saved to the databse")
    })
})

//   started from admin

//   reg.findOne({ name: 'harsh' })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.error(err);
//   });

app.post('/adminlogin', (req, res) => {
    var adminData = new admin(req.body);
    adminData.save().then(() => {
        // res.status(200).send({name});
        res.status(200).render('admin.hbs');
    }).catch(() => {
        res.status(400).send("item was not saved to the databse")
    })
})

app.post('/addData', (req, res) => {
    var addData = new add(req.body);
    addData.save().then(() => {
        res.send("Employee added successfully");
        // res.status(200).render('admin.hbs');
    }).catch(() => {
        res.status(400).send("Unable to add Employee")
    })
})

// app.post('/userreg', (req, res)=>{
//     var regData = new reg(req.body);
//     regData.save().then(()=>{
//     res.status(200).send("Data saved to the database")
//     }).catch(()=>{
//     res.status(400).send("Invelid data")
// })
// })


// app.post('/userreg', (req, res)=>{
//     const pass=req.body.userpassword;
//     const cpass= req.body.userconfirmpassword; 
//     if(pass==cpass)({
//         const regData = new reg(req.body)({
//         userfirstname: req.body.userfirstname,
//         userlastname : req.body.userlastname,
//         useremail : req.body.useremail,
//         userpassword : req.body.userpassword,
//         uerconfirmpassword : req.body.userconfirmpassword,

//     }).then(()=>{
//         res.status(200).send("Data saved to the database");
//         res.status(200).render('index.hbs');
//     })}})
//     else{
//         res.status(400).send("password doesn't match");
//     }
//    .catch(()=>{
//     res.status(400).send("Invelid data")
// })



//   app.post('/userlogin', (req, res) => {
//     // const {userloginemail,userloginpassword} = req.body;
//     const email = req.body.userloginemail;
//     const userloginpassword = req.body.userloginpassword;

//     const userlogregemail = reg.findOne({userloginemail:email});


//     // if(userlogregemail === email) {
//     //     var logData = new log(req.body);
//     //     logData.save();
//     //     // res.status(200).render('user_deshboard.hbs');
//     //   res.send(`Signup successful for  (${email})`);
//     // } else { 
//     //   res.status(400).send('Email and Password are not equal');
//     // }
// });

// app.post('/userreg',  (req, res)=>{
//     try{
//     const pass=req.body.userpassword;
//     const cpass= req.body.userconfirmpassword; 
//     if(pass==cpass){
//         var regData = new reg(req.body)({
//         userfirstname: req.body.userfirstname,
//         userlastname : req.body.userlastname,
//         useremail : req.body.useremail,
//         userpassword : req.body.userpassword,
//         uerconfirmpassword : req.body.userconfirmpassword,
//     })
//     // var registered =  await regData.save();
//     // res.status(200).render('index.hbs');
//     regData.save().then(() => {
//         res.send("This item has been saved to the database");
//         // res.status(200).render('admin.hbs');
//     }).catch(() => {
//         res.status(400).send("item was not saved to the databse")
//     })
//     // res.status(200).render('index.hbs');
//     }
//     else{
//         res.status(400).send("password doesn't match");
//     }}
//     catch(error){
//         res.status(400).send(error);

//     }
// })




// Sever listening
app.listen(port, () => {
    console.log(`server is runnning on the port ${port}`);
});