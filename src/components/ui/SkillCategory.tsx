import { SkillCategoryProps } from "@/types";

const SkillCategory: React.FC<SkillCategoryProps> = ({ icon, title, skills }) => (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-xl font-bold ml-3">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span 
            key={index}
            className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
);

export default SkillCategory;