export default function Skills() {
  return (
    <section className="max-w-5xl mx-auto text-center">
      <h2 className="text-2xl font-semibold tracking-wide text-[#F5F3FF]">
        Skills
      </h2>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
        {/* Cybersecurity */}
        <div>
          <h3 className="text-sm font-semibold tracking-widest uppercase text-violetGlow">
            Cybersecurity
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-[#DDD6FE]">
            <li>• Network security fundamentals</li>
            <li>• Vulnerability analysis & threat identification</li>
            <li>• Secure application design principles</li>
            <li>• Authentication, authorization & access control</li>
            <li>• Awareness of OWASP Top 10</li>
          </ul>
        </div>

        {/* Software Development */}
        <div>
          <h3 className="text-sm font-semibold tracking-widest uppercase text-violetGlow">
            Software Development
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-[#DDD6FE]">
            <li>• Python, JavaScript</li>
            <li>• Flask-based backend development</li>
            <li>• Frontend development with React</li>
            <li>• RESTful API design & integration</li>
            <li>• Clean, maintainable code practices</li>
          </ul>
        </div>

        {/* Systems & Tools */}
        <div>
          <h3 className="text-sm font-semibold tracking-widest uppercase text-violetGlow">
            Systems & Tools
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-[#DDD6FE]">
            <li>• Linux-based environments</li>
            <li>• Git & version control workflows</li>
            <li>• Basic networking concepts</li>
            <li>• Command-line tooling</li>
            <li>• Deployment & debugging fundamentals</li>
          </ul>
        </div>

        {/* Concepts & Practices */}
        <div>
          <h3 className="text-sm font-semibold tracking-widest uppercase text-violetGlow">
            Concepts & Practices
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-[#DDD6FE]">
            <li>• System architecture thinking</li>
            <li>• Problem-solving & logical reasoning</li>
            <li>• Secure-by-design mindset</li>
            <li>• Performance & reliability awareness</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
