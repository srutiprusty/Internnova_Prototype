import React from "react";
import LatestJobCards from "../LatestJobsCards/LatestJobCards";
import { useSelector } from "react-redux";

const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8];

const LatestJobs = () => {
  const { allJobs = [] } = useSelector((store) => store.job); // Ensure `allJobs` has a fallback value of an empty array.
  console.log("All Jobs:", allJobs);
  return (
    /*  <div>
      <h1>Latest Job Openings</h1>{" "}
      <div className="grid grid-cols-3 gap-4 my-5">
        {allJobs.length === 0 ? (
          <span>No Job Available</span>
        ) : (
          allJobs
            ?.slice(0, 6)
            .map((job) => <LatestJobCards key={job._id} job={job} />)
        )}
      </div>
    </div>
  );
}; */
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Latest Job Openings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allJobs.length === 0 ? (
          <div className="col-span-full text-center text-gray-500 py-10">
            No Jobs Available
          </div>
        ) : (
          allJobs
            .slice(0, 6)
            .map((job) => <LatestJobCards key={job._id} job={job} />)
        )}
      </div>
    </div>
  );
};

export default LatestJobs;
