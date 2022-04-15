const Project = require("../models/projectmodel");

function index(req, res) {
  Project.find({})
    .populate("backers owner")
    .exec((err, projects) => {
      res.json(projects);
    });
}

function create(req, res) {
  let project = new Project(req.body);
  project
    .save()
    .then((project) => {
      res.json(project);
    })
    .catch((err) => res.status(400).json(err));
}

function update(req, res) {
  Project.findByIdAndUpdate(req.params.id, {
    currentFunding: req.body.currentFunding,
    // backers: req.body.backers,
  })
    .then((project) => {
      res.json(project);
    })
    .catch((err) => res.status(400).json(err));
}

function deleteProject(req, res) {
  const project = Project.findById(req.params.id, {
    currentFunding: req.body.currentFunding,
  })
    .then((project) => {
      res.json(project);
    })
    .catch((err) => res.status(400).json(err));

    if (project) {
      await project.remove();
      res.json({ message: "Project removed" });
    } else {
      res.status(404);
      throw new Error("Project not found");
    }
}

module.exports = { index, create, update,deleteProject };
