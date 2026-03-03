export default function ContactPage() {
  return (
    <div className="space-y-8">
      <section className="space-y-3">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">Contact</p>
        <h1 className="text-4xl font-semibold tracking-tight">Let’s connect</h1>
        <p className="max-w-2xl text-zinc-300">
          If you want to discuss data science, machine learning, or potential collaboration, feel free to reach out.
        </p>
      </section>

      <section className="glass-card p-6">
        <div className="space-y-3 text-zinc-300">
          <p>
            <span className="font-medium text-white">Phone:</span> +45 51 33 91 09
          </p>
          <p>
            <span className="font-medium text-white">Email:</span> jakob231198@gmail.com
          </p>
          <p>
            <span className="font-medium text-white">Location:</span> Copenhagen, Denmark
          </p>
          <p>
            <span className="font-medium text-white">LinkedIn:</span>{" "}
            <a
              className="underline underline-offset-4 hover:text-white"
              href="https://www.linkedin.com/in/jakob-krogh-petersen-656b21129/"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/jakob-krogh-petersen-656b21129
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
