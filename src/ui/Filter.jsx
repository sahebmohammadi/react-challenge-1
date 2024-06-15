function Filter({ options, currentFilter, onChange }) {
  // function handleClick(value) {
  //   setFilter(value);
  // }

  return (
    <div className="flex items-center gap-x-2 text-xs">
      <span>وضعیت</span>
      <div className="flex items-center gap-x-2 p-1 border border-secondary-200 bg-secondary-0 rounded-lg">
        {options.map(({ value, label }) => {
          const isActive = value === currentFilter;
          return (
            <button
              key={value}
              disabled={isActive}
              onClick={() => onChange(value)}
              className={`whitespace-nowrap rounded-md px-4 py-1 font-bold transition-all duration-300
             ${
               isActive
                 ? "!bg-primary-900 text-white"
                 : "bg-secondary-0 text-secondary-800"
             } 
              `}
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
export default Filter;
