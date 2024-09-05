import Job from "../models/JobModel.js";
import { StatusCodes } from "http-status-codes";
// import { NotFoundError } from "../errors/customErrors.js";

// get all jobs
export const getAllJobs = async (req, res) => {
  console.log(req);
  const jobs = await Job.find({});
  res.status(StatusCodes.OK).json({ jobs });
};

// create jobs
export const createJob = async (req, res) => {
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};

// get single job
export const getJob = async (req, res) => {
  const job = await Job.findById(req.params.id);
  res.status(StatusCodes.OK).json({ job });
};

// edit jobs
export const updateJob = async (req, res) => {
  const updateJob = await Job.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(StatusCodes.OK).json({ msg: "job modified", job: updateJob });
};

// delete job
export const deleteJob = async (req, res) => {
  const removeJob = await Job.findByIdAndDelete(req.params.id);
  res.status(StatusCodes.OK).json({ msg: "job deleted", job: removeJob });
};

//   if (!company || !position) {
//     // bad request
//     res.status(400).json({ msg: "please provide company and position" });
//     return;
//   }
//   const id = nanoid(10);
//   const job = { id, company, position };
//   jobs.push(job);
