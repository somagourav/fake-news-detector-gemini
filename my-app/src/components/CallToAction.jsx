function CallToAction() {
    return (
      <section className="mt-20 bg-blue-600 py-12 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to verify content?</h2>
        <p className="mb-6">Create an account to track your analyses.</p>
        <div className="flex justify-center gap-4">
          <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100">
            Sign up for free
          </button>
          <button className="bg-blue-800 font-semibold px-6 py-3 rounded-lg hover:bg-blue-900">
            Login
          </button>
        </div>
      </section>
    );
  }
  
  export default CallToAction;