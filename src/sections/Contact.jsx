export default function Contact() {
  return (
    <section className="max-w-3xl mx-auto text-center">
      <h2 className="text-2xl font-semibold tracking-wide text-neutral-900">
        Contact
      </h2>

      <p className="mt-6 text-sm leading-relaxed text-slate-600">
        If you’d like to connect, collaborate, or discuss opportunities,
        feel free to reach out through the platforms below.
      </p>

      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
        {/* Email */}
        <a
          href="mailto:aadhil1304@gmail.com"
          className="
            px-6 py-3
            rounded-full
            border border-orange-200
            text-sm font-semibold
            text-orange-700
            hover:bg-orange-50
            transition
          "
        >
          Email
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noreferrer"
          className="
            px-6 py-3
            rounded-full
            border border-orange-200
            text-sm font-semibold
            text-orange-700
            hover:bg-orange-50
            transition
          "
        >
          LinkedIn
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          className="
            px-6 py-3
            rounded-full
            border border-orange-200
            text-sm font-semibold
            text-orange-700
            hover:bg-orange-50
            transition
          "
        >
          GitHub
        </a>
      </div>
    </section>
  );
}
