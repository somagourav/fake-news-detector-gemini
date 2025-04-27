function Footer() {
    return (
      <footer className="mt-16 p-8 bg-gray-950 text-gray-400 text-sm">
        <div className="flex flex-wrap justify-around">
          <div>
            <h4 className="font-bold mb-4">TruthLens</h4>
            <p>Bringing clarity to online information through AI-powered fact-checking.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Features</h4>
            <ul>
              <li>URL Analysis</li>
              <li>Dashboard</li>
              <li>Profile</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul>
              <li>Documentation</li>
              <li>FAQ</li>
              <li>API</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul>
              <li>About</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;