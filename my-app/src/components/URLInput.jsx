function URLInput() {
    return (
      <div className="flex justify-center mt-8">
        <div className="flex items-center bg-gray-800 rounded-lg overflow-hidden w-full max-w-2xl p-2">
          <input
            type="text"
            placeholder="Enter URL to fact-check (e.g., https://example.com/article)"
            className="flex-grow p-3 bg-transparent outline-none text-white"
          />
          <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-600">
            🔍
          </button>
        </div>
      </div>
    );
  }
  
  export default URLInput;