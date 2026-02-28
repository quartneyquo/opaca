const breeds = [
  {
    badge: 'Most Common • ~90%',
    name: 'Huacaya',
    img: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Alpaca_fleece.JPG',
    alt: 'Fluffy Huacaya alpaca',
    desc: 'The Huacaya (wah-KAI-ya) is the fluffy, teddy-bear-looking alpaca you\'ve likely seen in photos. Their fiber grows outward from the body in crimped, dense waves, giving them a round, poofy appearance.',
  },
  {
    badge: 'Rare & Silky • ~10%',
    name: 'Suri',
    img: 'https://images.pexels.com/photos/18020027/pexels-photo-18020027.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Suri alpaca with long silky fleece',
    desc: 'The Suri (SOO-ree) has long, silky fiber that drapes down in pencil-like locks rather than puffing outward. Suri fleece is extraordinarily lustrous with a flowing, almost dreadlock-like look.',
  },
]

export default function Breeds() {
  return (
    <section className="section" id="breeds">
      <h2 className="section-title">Two Breeds</h2>
      <p className="section-subtitle">Same adorableness, different fleece</p>
      <div className="breeds-grid">
        {breeds.map((b) => (
          <div className="breed-card" key={b.name}>
            <img className="breed-img" src={b.img} alt={b.alt} />
            <div className="breed-body">
              <span className="breed-badge">{b.badge}</span>
              <h3>{b.name}</h3>
              <p>{b.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
