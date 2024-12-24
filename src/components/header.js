const Header = () => {
    return (
      <header className="bg-white shadow p-4 flex items-center justify-between">
        <input
          type="text"
          placeholder="Search your course"
          className="border rounded px-4 py-2 w-1/3"
        />
        <div className="flex items-center space-x-4">
          <button className="relative">
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-2">2</span>
            <i className="fas fa-bell text-gray-600"></i>
          </button>
          <img
            src="https://via.placeholder.com/40"
            alt="User Profile"
            className="rounded-full border"
          />
          <span className="font-bold">Adeline H. Dancy</span>
        </div>
      </header>
    );
  };
  
  export default Header;
  