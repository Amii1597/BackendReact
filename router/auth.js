const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const authenticate = require("../middleware/authenticate");
require("../db/conn");

const User = require("../model/userSchema");
const Story = require("../model/storySchema");
const Story2 = require("../model/storySchema2");
const Story3 = require("../model/storySchema3");
const Story4 = require("../model/storySchema4");

router.get("/", (req, res) => {
  res.send("hellow router");
});
router.post("/register", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(422).json({ error: "plz fill all the details" });
  }
  User.findOne({ email: email })
    .then((userExist) => {
      if (userExist) {
        return res.status(422).json({ error: "alredy Exist" });
      }
      const user = new User({ email, password });
      user
        .save()
        .then(() => {
          res.status(201).json({ message: "user Registered Successfuly" });
        })
        .catch((err) =>
          res.status(500).json({ error: "failed to registered" })
        );
    })
    .catch((err) => {
      console.log(err);
    });
  // console.log(req.body.name ||;!
  // ||o!nsole ||l!og(req.body.email);
  // res.json({message:req.body});
});
//Login Route
router.post("/signin", async (req, res) => {
  // console.log(req.body);
  // res.json({message:"Awesome"});
  try {
    let token;
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "plz filled the data" });
    }
    const userLogin = await User.findOne({ email: email });

    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);

      token = await userLogin.generateAuthToken({ id: user._id });
      console.log(token);
      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });
      if (isMatch) {
        res.status(400).json({ error: "Invalid Credientials" });
      } else {
        res.json({ message: "user signin Successfully" });
      }
    } else {
      res.status(400).json({ error: "Invalid Credientialsss" });
    }
  } catch (err) {
    res.status(400).json({ error: "Error" });
  }
});
// router.get("/about", authenticate, (req, res) => {
//   console.log("hello my about");
//   res.send(req.rootUser);
// });

// Logout Page
router.get("/logout"),
  (req, res) => {
    console.log("Hello my Logout Page");
    res.clearCookie("jwtoken", { path: "/" });
    res.status(200).send("User Logout");
  };
//movie data
router.post("/addstorymovie", (req, res) => {
  const { id, heading, description, image, category } = req.body;
  if (!id || !heading || !description || !image || !category) {
    return res.status(422).json({ error: "plz fill all the details" });
  }
  Story.findOne({ category: category })
    .then((userExist) => {
      if (userExist) {
        return res.status(422).json({ error: "alredy Exist" });
      }
      const story = new Story({
        id,
        heading,
        description,
        image,
        category,
      });
      story
        .save()
        .then(() => {
          res.status(201).json({ message: "user Registered Successfuly" });
        })
        .catch((err) =>
          res.status(500).json({ error: "failed to registered" })
        );
    })
    .catch((err) => {
      console.log(err);
    });
});
router.get("/addstorymovie", (req, res) => {
Story.find().then((story)=>{
  res.json(story);
}).catch((error)=>{
  res.json({error:"something is wrong"})
})
})

router.post("/addstorymovie/64b6922896b06100bf5ed6b5", async(req, res) => {
  let {id}=req.params;
  const {image}=req.body
  Story.findByIdAndUpdate(id, {$push:{image:image}}).then((Story) => {
          console.log(Story);
          res.json({ message: "updated" });
        })
        .catch((error) => {
          res.json({ error: "Wrong" });
        });
})

// Food data
router.post("/addstoryfood", (req, res) => {
  const { heading, description, image, category } = req.body;
  if (!heading || !description || !image || !category) {
    return res.status(422).json({ error: "plz fill all the details" });
  }
  Story2.findOne({ category: category })
    .then((userExist) => {
      if (userExist) {
        return res.status(422).json({ error: "alredy Exist" });
      }
      const story = new Story2({
        heading,
        description,
        image,
        category,
      });
      story
        .save()
        .then(() => {
          res.status(201).json({ message: "user Registered Successfuly" });
        })
        .catch((err) =>
          res.status(500).json({ error: "failed to registered" })
        );
    })
    .catch((err) => {
      console.log(err);
    });
});
router.get("/addstoryfood", (req, res) => {
Story2.find().then((story3)=>{
  res.json(story3);
}).catch((error)=>{
  res.json({error:"something is wrong"})
})
})
router.post("/addstoryfood/64b69a5e26e6d67fad5d6522", (req, res) => {
  let {id}=req.params._id;

  const {image}=req.body
  Story2.findByIdAndUpdate(id, {$push:{image:image}}).then((Story2) => {
          console.log(Story2);
          res.json({ message: "updated" });
        })
        .catch((error) => {
          res.json({ error: "Wrong" });
        });
})
// Education data
router.post("/addstoryeducation", (req, res) => {
  const { heading, description, image, category } = req.body;
  if (!heading || !description || !image || !category) {
    return res.status(422).json({ error: "plz fill all the details" });
  }
  Story3.findOne({ category: category })
    .then((userExist) => {
      if (userExist) {
        return res.status(422).json({ error: "alredy Exist" });
      }
      const story = new Story3({
        heading,
        description,
        image,
        category,
      });
      story
        .save()
        .then(() => {
          res.status(201).json({ message: "user Registered Successfuly" });
        })
        .catch((err) =>
          res.status(500).json({ error: "failed to registered" })
        );
    })
    .catch((err) => {
      console.log(err);
    });
});
router.get("/addstoryeducation", (req, res) => {
Story3.find().then((story3)=>{
  res.json(story3);
}).catch((error)=>{
  res.json({error:"something is wrong"})
})
})
router.post("/addstoryeducation/64b68cd28a4231ab2311b5f0", (req, res) => {
  let {id}=req.params;

  const {image}=req.body
  Story3.findByIdAndUpdate(id, {$push:{image:image}}).then((Story3) => {
          console.log(Story3);
          res.json({ message: "updated" });
        })
        .catch((error) => {
          res.json({ error: "Wrong" });
        });
})
// Medical data
router.post("/addstorymedical", (req, res) => {
  const { heading, description, image, category } = req.body;
  if (!heading || !description || !image || !category) {
    return res.status(422).json({ error: "plz fill all the details" });
  }
  Story4.findOne({ category: category })
    .then((userExist) => {
      if (userExist) {
        return res.status(422).json({ error: "alredy Exist" });
      }
      const story = new Story4({
        heading,
        description,
        image,
        category,
      });
      story
        .save()
        .then(() => {
          res.status(201).json({ message: "user Registered Successfuly" });
        })
        .catch((err) =>
          res.status(500).json({ error: "failed to registered" })
        );
    })
    .catch((err) => {
      console.log(err);
    });
});
router.get("/addstorymedical", (req, res) => {
Story4.find().then((story)=>{
  res.json(story);
}).catch((error)=>{
  res.json({error:"something is wrong"})
})
})
router.post("/addstorymedical/64b68cd28a4231ab2311b5f0", (req, res) => {
  let {id}=req.params;

  const {image}=req.body
  Story4.findByIdAndUpdate(id, {$push:{image:image}}).then((Story4) => {
          console.log(Story4);
          res.json({ message: "updated" });
        })
        .catch((error) => {
          res.json({ error: "Wrong" });
        });
})
// select option why id
// router.post()
//about us ka page
router.get("/about", authenticate, (req, res) => {
  console.log("Hello about");
  res.send(req.rootUser);
});

module.exports = router;
