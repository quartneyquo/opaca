const facts = [
  { icon: '🎵', title: 'Humming Communicators', text: 'Alpacas communicate primarily through humming. Each hum has a different meaning — contentment, stress, curiosity, or calling their young.' },
  { icon: '🌿', title: 'Eco-Friendly Grazers', text: 'Their soft, padded feet don\'t damage soil the way hooves do, and they have efficient digestive systems that produce less methane than cattle.' },
  { icon: '🧶', title: 'Hypoallergenic Fiber', text: 'Alpaca fiber contains no lanolin (unlike sheep\'s wool), making it naturally hypoallergenic, warmer than wool, and incredibly soft.' },
  { icon: '🤝', title: 'Herd Animals', text: 'Alpacas are highly social and become stressed if separated from their herd. They often form deep bonds with other alpacas and even their human caretakers.' },
  { icon: '💧', title: 'Spitting is a Warning', text: 'Yes, they can spit — but it\'s mostly directed at other alpacas during feeding disputes. A spitting alpaca is usually one that\'s been provoked.' },
  { icon: '📅', title: '6,000 Years of History', text: 'Alpacas were first domesticated around 6,000 years ago in the Peruvian Andes. The Incan civilization considered alpaca fiber more valuable than gold.' },
]

export default function Facts() {
  return (
    <div className="facts-section" id="facts">
      <div className="facts-inner">
        <h2 className="section-title">Fun Facts</h2>
        <p className="section-subtitle">Things you probably didn't know about alpacas</p>
        <div className="facts-grid">
          {facts.map((f) => (
            <div className="fact-card" key={f.title}>
              <span className="fact-icon">{f.icon}</span>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
