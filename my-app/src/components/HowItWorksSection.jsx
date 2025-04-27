function HowItWorksSection() {
    return (
      <section className="mt-24 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">How TruthLens Works</h2>
        <div className="flex flex-wrap justify-center gap-12">
          {[
            { step: '01', title: 'Enter a URL', description: 'Paste any news article, social media post, or website URL to analyze.' },
            { step: '02', title: 'Get Instant Analysis', description: 'Our AI evaluates content credibility, bias, and accuracy in seconds.' },
            { step: '03', title: 'Review the Breakdown', description: 'Explore detailed results showing flagged elements and why.' }
          ].map((item, idx) => (
            <div key={idx} className="text-center max-w-xs">
              <div className="text-blue-400 text-4xl font-bold">{item.step}</div>
              <h3 className="text-xl font-bold my-4">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default HowItWorksSection;