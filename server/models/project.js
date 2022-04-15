const mongoose = require("mongoose");

const projectSchema = mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    subtitle: String,
    description: { type: String, required: true },
    category: {
      type: String,
      enum: [
        "Art",
        "Design",
        "Film & Video",
        "Game",
        "Music",
        "Publishing",
        "Technology",
      ],
      required: true,
    },
    images: [String],
    fundingGoal: { type: Number, required: true },
    currentFunding: { type: Number, default: 0 },
    fundingDuration: { type: Number, required: true },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

const Project = mongoose.model("Project", projectSchema);

module.exports = { Project };
