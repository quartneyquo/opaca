const photos = [
  {
    src: 'https://images.pexels.com/photos/13990652/pexels-photo-13990652.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Close up of an alpaca',
    caption: 'Judgement mode: on',
  },
  {
    src: 'https://images.pexels.com/photos/6215629/pexels-photo-6215629.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Two alpacas on a grassy field',
    caption: 'Squad goals',
  },
  {
    src: 'https://images.pexels.com/photos/7022792/pexels-photo-7022792.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Young white alpaca',
    caption: 'Baby cria alert 🥺',
  },
  {
    src: 'https://images.pexels.com/photos/20922645/pexels-photo-20922645.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Alpaca against desert hills',
    caption: 'Home in the Andes',
  },
  {
    src: 'https://images.pexels.com/photos/5840691/pexels-photo-5840691.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Cute white alpaca',
    caption: 'Cotton ball with legs',
  },
  {
    src: 'https://images.pexels.com/photos/28473214/pexels-photo-28473214.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Young alpaca resting in a sunny pasture',
    caption: 'Afternoon nap mode',
  },
]

export default function Gallery() {
  return (
    <div className="gallery-section" id="gallery">
      <div className="gallery-inner">
        <h2 className="section-title">Gallery</h2>
        <p className="section-subtitle">A few of our favorite alpaca moments</p>
        <div className="gallery-grid">
          {photos.map((p) => (
            <div className="gallery-item" key={p.caption}>
              <img src={p.src} alt={p.alt} />
              <div className="caption">{p.caption}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
