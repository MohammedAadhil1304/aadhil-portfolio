export default function Contact() {
  return (
    <section className="max-w-3xl mx-auto text-center">
      <h2 className="text-2xl font-semibold tracking-wide text-[#F5F3FF]">
        Contact
      </h2>

      <p className="mt-6 text-sm leading-relaxed text-[#DDD6FE]">
        If you’d like to connect, collaborate, or discuss opportunities,
        feel free to reach out through the platforms below.
      </p>

      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
        <a
          href="mailto:aadhil1304@gmail.com"
          className="px-6 py-3 rounded-full border border-violetGlow/40 text-sm font-semibold text-violetGlow hover:bg-violetGlow/10 transition"
        >
          Email
        </a>

        <a
          href="www.linkedin.com/in/mohammedaadhil1304"
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3 rounded-full border border-violetGlow/40 text-sm font-semibold text-violetGlow hover:bg-violetGlow/10 transition"
        >
          LinkedIn
        </a>

        <a
          href="https://github.com/MohammedAadhil1304/"
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3 rounded-full border border-violetGlow/40 text-sm font-semibold text-violetGlow hover:bg-violetGlow/10 transition"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}
