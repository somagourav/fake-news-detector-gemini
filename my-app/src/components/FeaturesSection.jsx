function FeaturesSection() {
    return (
      <section className="mt-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Advanced Fact-Checking, Simplified</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {['URL Analysis', 'Truth Score', 'Explainable AI', 'Analysis History'].map((feature, index) => (
            <div key={index} className="w-64 bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center">
              <div className="text-3xl mb-4">🔷</div>
              <h3 className="text-xl font-semibold">{feature}</h3>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default FeaturesSection;