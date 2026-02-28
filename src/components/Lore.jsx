const lore = [
  {
    icon: '👑',
    title: 'Sacred to the Inca',
    body: `The Inca Empire considered alpacas divine gifts from Pachamama — Mother Earth. White alpacas were especially revered and were reserved exclusively for Inca royalty. Their fleece, called "the fiber of the gods," was worn only by emperors and high priests. Killing an alpaca without permission from the state was punishable by death.`,
  },
  {
    icon: '🌙',
    title: 'Children of the Moon',
    body: `Ancient Andean legend holds that alpacas are the children of the moon goddess Mama Quilla. According to the myth, she wept tears of silver that fell to earth and transformed into alpacas — which is why their fleece shimmers and their eyes hold a strange, knowing calm. Herders still thank Mama Quilla before shearing season begins.`,
  },
  {
    icon: '🏔️',
    title: 'The Paqo and the Herd',
    body: `In Quechua tradition, a paqo (Andean spiritual practitioner) would perform rituals called pagos to the earth before moving a herd to new pasture. They believed alpacas could sense spiritual imbalance in the land — a restless herd meant the earth was unhappy. A calm, grazing herd was a sign of harmony between the human world and the natural one.`,
  },
  {
    icon: '🦙',
    title: 'The First Alpaca',
    body: `One Andean creation story tells of a young llama herder who fell in love with a star. The star descended each night to meet him, but the Sun God grew jealous and forbade her return. In her grief, she wept until her tears pooled into a small, gentle creature — the first alpaca — so the herder would never be alone on the high plains. This is said to be why alpacas always seem to be searching the sky.`,
  },
  {
    icon: '🧵',
    title: 'Fiber That Outlasted Empires',
    body: `When Spanish conquistadors arrived in the 1500s and dismantled the Inca Empire, they seized gold and silver — but largely ignored alpacas. The indigenous herders hid their finest alpacas high in the Andes, above 15,000 feet, where Spanish horses couldn't follow. This act of preservation is why the alpaca breed survived. The animals the conquistadors took were mostly llamas — they never quite got the two straight.`,
  },
  {
    icon: '⭐',
    title: 'The Alpaca Star Calendar',
    body: `The Inca used a constellation called Yacana — a dark cloud constellation made of shadow, not stars — to predict alpaca breeding seasons and rainfall. Yacana was believed to be a giant celestial alpaca that drank from the ocean each night to prevent it from flooding the world. When Yacana disappeared from the night sky, the Inca believed it had descended to earth to nurse from a sleeping alpaca, leaving the animal extra healthy and fertile.`,
  },
]

export default function Lore() {
  return (
    <div className="lore-section" id="lore">
      <div className="lore-inner">
        <div className="lore-header">
          <span className="lore-rune">𓂀</span>
          <h2 className="section-title">Alpaca Lore</h2>
          <p className="section-subtitle">Myth, legend & ancient wisdom from the Andes</p>
        </div>
        <div className="lore-grid">
          {lore.map((entry) => (
            <div className="lore-card" key={entry.title}>
              <div className="lore-icon">{entry.icon}</div>
              <h3 className="lore-card-title">{entry.title}</h3>
              <p className="lore-card-body">{entry.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
