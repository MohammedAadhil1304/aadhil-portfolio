export default function Projects() {
  return (
    <section className="max-w-5xl mx-auto text-center">
      <h2 className="text-2xl font-semibold tracking-wide text-neutral-900">
        Projects
      </h2>

      <div className="mt-10 space-y-10 text-left">
        {/* Project 1 */}
        <div>
          <h3 className="text-lg font-semibold text-neutral-800">
            ChronoSteg – Time-Locked Steganography System
          </h3>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            A security-focused system that combines steganography with
            time-based access control, ensuring that sensitive data remains
            inaccessible until a predefined unlock time. Designed to protect
            time-critical intelligence and confidential information.
          </p>
          <p className="mt-2 text-xs text-[#9A4B1F] tracking-wide">
            Steganography · Cryptography · Time-Lock Encryption · Security
          </p>
        </div>

        {/* Project 2 */}
        <div>
          <h3 className="text-lg font-semibold text-neutral-800">
            Cybersecurity Awareness Chatbot
          </h3>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            An AI-powered chatbot developed to educate users on cybersecurity
            threats, safe online practices, and common attack vectors through
            interactive, conversational learning.
          </p>
          <p className="mt-2 text-xs text-[#9A4B1F] tracking-wide">
            AI · Cybersecurity Education · Chatbot · Web Application
          </p>
        </div>

        {/* Project 3 */}
        <div>
          <h3 className="text-lg font-semibold text-neutral-800">
            Smart Forensics Log Analyzer
          </h3>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            A forensic analysis tool capable of parsing and analyzing multiple
            log formats to identify anomalies, suspicious activities, and
            security-relevant events across systems.
          </p>
          <p className="mt-2 text-xs text-[#9A4B1F] tracking-wide">
            Digital Forensics · Log Analysis · Security Monitoring
          </p>
        </div>

        {/* Project 4 */}
        <div>
          <h3 className="text-lg font-semibold text-neutral-800">
            Text-to-Video AI Generator
          </h3>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            A web-based AI system that converts textual content into narrated
            videos with automated voice generation, captions, and video
            rendering.
          </p>
          <p className="mt-2 text-xs text-[#9A4B1F] tracking-wide">
            AI · Media Automation · Flask · Web Development
          </p>
        </div>

        {/* Project 5 */}
        <div>
          <h3 className="text-lg font-semibold text-neutral-800">
            Secure Sales & Inventory Management System
          </h3>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            A role-based web application designed to manage sales data,
            inventory tracking, and report generation with controlled user
            access and secure data handling.
          </p>
          <p className="mt-2 text-xs text-[#9A4B1F] tracking-wide">
            Web Application · Role-Based Access · Data Management
          </p>
        </div>
      </div>
    </section>
  );
}
