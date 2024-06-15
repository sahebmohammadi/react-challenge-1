import { useState } from "react";
import ProjectsTable from "./freatures/projects/ProjectsTable";
import ProjectsHeader from "./freatures/projects/ProjectsHeader";
import { projects } from "./data/projects";

function App() {
  const [status, setStatus] = useState("ALL");
  const [sort, setSort] = useState("created_desc");
  const [category, setCategory] = useState("ALL");
  // const [filteredProjects, setFilteredProjects] = useState(projects);

  const handleChangeSort = (e) => {
    setSort(e.target.value);
  };

  const handleChangeCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleChangeStatus = (value) => {
    setStatus(value);
  };

  const handleSort = (a, b) => {
    switch (sort) {
      case "created_desc": // latest
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      case "created_asc": // earliest
        return (
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
      case "deadline_asc":
        return new Date(a.deadline).getTime() - new Date(b.deadline).getTime();
      case "deadline_desc":
        return new Date(b.deadline).getTime() - new Date(a.deadline).getTime();
      case "budget_desc":
        return b.budget - a.budget;
      case "budget_asc":
        return a.budget - b.budget;
      default:
        throw new Error("No Matching Sort!");
    }
  };

  const filteredAndSortProjects = projects
    .filter((p) => (status === "ALL" ? true : p.status == status))
    .filter((p) =>
      category === "ALL" ? true : p.category.englishTitle == category
    )
    .sort(handleSort);

  return (
    <div className="flex justify-center mt-20 p-4">
      <div className="max-w-screen-lg w-full">
        <ProjectsHeader
          status={status}
          onChangeStatus={handleChangeStatus}
          sort={sort}
          onChangeSort={handleChangeSort}
          category={category}
          onChangeCategory={handleChangeCategory}
        />
        <ProjectsTable filteredProjects={filteredAndSortProjects} />
      </div>
    </div>
  );
}

export default App;
