import { projects } from "../../data/projects";
import Filter from "../../ui/Filter";
import Select from "../../ui/Select";

const sortOptions = [
  {
    label: "تاریخ ایجاد (جدید ترین)",
    value: "created_desc",
  },
  {
    label: "تاریخ ایجاد (قدیمی ترین)",
    value: "created_asc",
  },
  {
    label: "قیمت (صعودی)",
    value: "budget_asc",
  },
  {
    label: "قیمت (نزولی)",
    value: "budget_desc",
  },
  {
    label: "ددلاین (صعوی)",
    value: "deadline_asc",
  },
  {
    label: "ددلاین (نزولی)",
    value: "deadline_desc",
  },
];

const statusOptions = [
  {
    label: "همه",
    value: "ALL",
  },
  {
    label: "باز",
    value: "OPEN",
  },
  {
    label: "بسته",
    value: "CLOSED",
  },
];

const categories = projects.map((p) => {
  return {
    label: p.category.title,
    value: p.category.englishTitle,
  };
});

const transformedCategories = [
  {
    value: "ALL",
    label: "دسته بندی (همه)",
  },
  ...categories,
];

function ProjectsHeader({
  status,
  onChangeStatus,
  sort,
  onChangeSort,
  category,
  onChangeCategory,
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 text-secondary-700 mb-8">
      <h1 className="text-lg font-bold">لیست پروژه ها</h1>
      <Filter
        options={statusOptions}
        currentFilter={status}
        onChange={onChangeStatus}
      />
      <Select onChange={onChangeSort} value={sort} options={sortOptions} />
      <Select
        onChange={onChangeCategory}
        value={category}
        options={transformedCategories}
      />
    </div>
  );
}
export default ProjectsHeader;
