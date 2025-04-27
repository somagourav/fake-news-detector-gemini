function Navbar() {
    return (
      <nav className="flex justify-between items-center p-4 px-8 bg-gray-950">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold">🔎 Truth<span className="text-blue-400">Lens</span></span>
        </div>
        <div className="flex gap-6 items-center">
          <a href="#" className="hover:text-blue-400">Home</a>
          <a href="#" className="hover:text-blue-400">Dashboard</a>
          <a href="#" className="hover:text-blue-400">Analyze</a>
          <div className="flex gap-4">
            <button className="hover:text-blue-400">🌙</button>
            <button className="hover:text-blue-400">👤 Login</button>
          </div>
        </div>
      </nav>
    );
  }
  
  export default Navbar;