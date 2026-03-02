export default function OurMission() {
  const cards = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3C7 3 3 7 3 12s4 9 9 9 9-4 9-9M15 3c2.5 1.5 4.5 4 4.5 7" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
        </svg>
      ),
      title: "Sustainable Growth",
      body: "We partner with businesses to develop strategies that prioritize long-term ecological balance alongside financial performance — proving that doing good and doing well go hand in hand.",
      offset: "mt-0",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
      title: "Conscious Impact",
      body: "Every initiative we champion is measured not just in dollars, but in its real-world effect on communities and ecosystems. Impact is our bottom line.",
      offset: "mt-10",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
        </svg>
      ),
      title: "Rational Stewardship",
      body: "We cut through greenwashing with logic-driven environmental initiatives that are practical, scalable, and rooted in science — fostering a smarter relationship between industry and nature.",
      offset: "mt-20",
    },
  ];

  return (
    <section
      className="w-full py-24 px-4 relative overflow-hidden"
      style={{
        background: "#f4f4f4",
      }}
    >
      <div className="mx-auto max-w-7xl flex flex-col gap-16">
        {/* Heading block */}
        <div className="flex flex-col gap-6 items-center text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-green-700">
            Our Mission
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-zinc-800 leading-tight">
            Practicing <span className="text-green-700">Conscious Economics</span>
          </h2>
          <p className="text-lg text-zinc-600 leading-relaxed">
            We believe that every economic decision carries an environmental consequence. By practicing conscious economics, we align financial growth with ecological responsibility — making sustainability not just a value, but a standard.
          </p>
          <p className="text-lg text-zinc-600 leading-relaxed">
            From the enterprises we support to the industries we serve, our mission is to demonstrate that profitability and planetary stewardship are not opposites — they are partners.
          </p>
          <div className="w-16 h-1 bg-green-700 rounded-full mt-2 mx-auto" />
        </div>

        {/* Staggered cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-start">
          {cards.map((card) => (
            <div
              key={card.title}
              className={`${card.offset} rounded-2xl bg-white shadow-xl border-t-4 border-green-600 p-8 flex flex-col gap-4 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300`}
            >
              <div className="w-16 h-16 rounded-2xl bg-green-700 flex items-center justify-center shadow-md">
                <div className="text-white">{card.icon}</div>
              </div>
              <h3 className="text-xl font-bold text-zinc-800">{card.title}</h3>
              <p className="text-zinc-500 leading-relaxed text-sm">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

