import mongoose from "mongoose";
import { JOB_STATUS, JOB_TYPE, JOB_SORT_BY } from "../utils/constants.js";
const JobSchema = new mongoose.Schema(
  {
    // _id: String,
    company: String,
    position: String,
    jobStatus: {
      type: String,
      enum: Object.values(JOB_STATUS),
      default: JOB_STATUS.PENDING,
    },
    jobType: {
      type: String,
      enum: Object.values(JOB_TYPE),
      default: JOB_TYPE.FULL_TIME,
    },
    jobLocation: {
      type: String,
      default: "my city",
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Job", JobSchema);

// CRUD
// C- CREATE, R-READ, U-UPDATE, D-DELETE

// fetch("https://www.course-api.com/react-useReducer-cart-project")
//   .then((res) => res.json())
//   .then((data) => console.log(data));
// to get unique ids
