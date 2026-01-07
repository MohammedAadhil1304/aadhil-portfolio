export default function Projects() {
  return (
    <section className="max-w-5xl mx-auto text-center">
      <h2 className="text-2xl font-semibold tracking-wide text-[#F5F3FF]">
        Projects
      </h2>

      <div className="mt-10 space-y-10 text-left">
        <div>
          <h3 className="text-lg font-semibold text-[#E9D5FF]">
            ChronoSteg – Time-Locked Steganography System
          </h3>
          <p className="mt-2 text-sm text-[#DDD6FE] leading-relaxed">
            A security-focused system that combines steganography with
            time-based access control, ensuring that sensitive data remains
            inaccessible until a predefined unlock time.
          </p>
          <p className="mt-2 text-xs text-violetGlow tracking-wide">
            Steganography · Cryptography · Time-Lock Encryption · Security
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#E9D5FF]">
            Cybersecurity Awareness Chatbot
          </h3>
          <p className="mt-2 text-sm text-[#DDD6FE] leading-relaxed">
            An AI-powered chatbot developed to educate users on cybersecurity
            threats, safe online practices, and common attack vectors.
          </p>
          <p className="mt-2 text-xs text-violetGlow tracking-wide">
            AI · Cybersecurity Education · Chatbot · Web Application
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#E9D5FF]">
            Smart Forensics Log Analyzer
          </h3>
          <p className="mt-2 text-sm text-[#DDD6FE] leading-relaxed">
            A forensic analysis tool capable of parsing and analyzing multiple
            log formats to identify anomalies and suspicious activities.
          </p>
          <p className="mt-2 text-xs text-violetGlow tracking-wide">
            Digital Forensics · Log Analysis · Security Monitoring
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#E9D5FF]">
            Text-to-Video AI Generator
          </h3>
          <p className="mt-2 text-sm text-[#DDD6FE] leading-relaxed">
            A web-based AI system that converts textual content into narrated
            videos with automated voice generation and captions.
          </p>
          <p className="mt-2 text-xs text-violetGlow tracking-wide">
            AI · Media Automation · Flask · Web Development
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#E9D5FF]">
            Secure Sales & Inventory Management System
          </h3>
          <p className="mt-2 text-sm text-[#DDD6FE] leading-relaxed">
            A role-based web application designed to manage sales data and
            inventory tracking with secure access control.
          </p>
          <p className="mt-2 text-xs text-violetGlow tracking-wide">
            Web Application · Role-Based Access · Data Management
          </p>
        </div>
      </div>
    </section>
  );
}
