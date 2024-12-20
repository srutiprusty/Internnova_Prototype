import { React, useEffect } from "react";
import Job from "../../../components/job/Job";
import { FaArrowAltCircleRight } from "react-icons/fa";
import "./JobPg.css";
import JobHeader from "../../../components/JobHeader/JobHeader";
import Jobs from "../../../components/Jobs/Jobs";
import CategoryCarousel from "../../../components/CategoryCarousel/CategoryCarousel";
import LatestJobs from "@/components/LatestJobs/LatestJobs";
import { useSelector } from "react-redux";
import LatestJobCards from "@/components/LatestJobsCards/LatestJobCards";
import { useNavigate } from "react-router-dom";
import useGetAllJobs from "@/hooks/useGetAllJobs";
import Browse from "@/components/Browse";
import SearchBar from "@/components/SearchBar";

const JobPg = () => {
  const navigate = useNavigate();
  /*  const { allJobs } = useSelector((store) => store.job); */
  useGetAllJobs();
  const { user } = useSelector((store) => store.auth);

  useEffect(() => {
    if (user?.role === "recruiter") {
      navigate("/admin/companies");
    }
  }, []);
  return (
    <>
      <div className="jobs-container-jobs">
        <JobHeader />
        <div className="full-width-image-jobs">
          <img
            src=".\images\jobpage.png"
            alt="FullWidthImage"
            className="full-image-jobs"
          />
        </div>
        <div className="centered-image-jobs">
          <img
            src="./images/jobExplore.png"
            alt="CenteredImage"
            className="explore-image-jobs"
          />
        </div>
        <SearchBar />
        <CategoryCarousel />
        <div className="featured-jobs-jobs">
          <h2 className="featured-title-jobs">Best Featured Jobs</h2>
          <button
            className="explore-featured-button-jobs"
            onClick={() => navigate("/jobs")}
          >
            <FaArrowAltCircleRight className="Explore-icon-jobs" />
          </button>
        </div>

        <div className="jobcards-container-jobs">
          {/*  <div className="jobcard">
            <Job />
          </div>
          <div className="jobcard">
            <Job />
          </div>
          <div className="jobcard">
            <Job />
          </div>
          <div className="jobcard">
            <Job />
          </div> */}
          {/* <Jobs /> */}
          <LatestJobs />
          {/*  <LatestJobCards /> */}
        </div>
      </div>
    </>
  );
};

export default JobPg;
