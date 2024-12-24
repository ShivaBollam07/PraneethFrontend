import { 
  Search, 
  Bell, 
  Calendar,
  Home,
  Users,
  BookOpen,
  HelpCircle,
  BarChart2,
  Settings,
  ChevronDown
} from "lucide-react";



export const Sidebar = () => {
  const menuItems = [
    { icon: <Home size={20} />, label: 'Dashboard' },
    { icon: <Users size={20} />, label: 'Students', active: true },
    { icon: <BookOpen size={20} />, label: 'Chapter' },
    { icon: <HelpCircle size={20} />, label: 'Help' },
    { icon: <BarChart2 size={20} />, label: 'Reports' },
    { icon: <Settings size={20} />, label: 'Settings' }
  ];

  return (
    <div className="w-64 bg-white h-screen border-r border-gray-200 p-6 hidden md:block">
      <div className="flex items-center space-x-2 mb-8">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
          <span className="text-white text-xl font-bold">Q</span>
        </div>
        <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
          Quyl.
        </span>
      </div>

      <ul className="space-y-2">
        {menuItems.map((item, index) => (
          <li key={index}>
            <button
              className={`
                w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200
                ${item.active 
                  ? 'bg-blue-50 text-blue-600 font-medium'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600'}
              `}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar