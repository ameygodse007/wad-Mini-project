const router = require("express").Router();
const { Project } = require("../models/project");

// method : post
// use : to save new projects to database
router.post("/saveproject", async (req, res) => {
  try {
    const project = await new Project({ ...req.body });

    res.send({
      message: "Project Created Sucessfully",
      data: {
        project, //shorthand used
      },
    });
  } catch (e) {
    console.log(e);
    res.status(500).send({ message: "Project Saving Failed", details: e.msg });
  }
});

// method : get
// use  : fetch projects according to filters
router.get("/getproject", async (req, res) => {
  try {
    let filter = {};

    const projects = await Project.find(filter).orderBy("timestamp", "desc");

    res.send({
      message: "Project Fetched Sucessfully",
      data: {
        projects,
      },
    });
  } catch (e) {
    console.log(e);
    res
      .status(500)
      .send({ message: "Project Fetching Failed", details: e.msg });
  }
});

// method : post / delete
// use : to delete individual projects
router.post("/deleteproject", async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(p_id);

    res.send({
      message: "Project Deleted Sucessfully",
    });
  } catch (e) {
    console.log(e);
    res
      .status(500)
      .send({ message: "Project Fetching Failed", details: e.msg });
  }
});
