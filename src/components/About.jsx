export default function About() {
  return (
    <section className="section" id="about">
      <h2 className="section-title">What is an Alpaca?</h2>
      <p className="section-subtitle">Soft, gentle, and wonderfully weird</p>
      <div className="about-grid">
        <div className="about-text">
          <p>
            Alpacas (<em>Vicugna pacos</em>) are domesticated South American camelids,
            closely related to llamas, vicuñas, and guanacos. They have been bred for
            thousands of years by the indigenous peoples of the Andes — primarily in
            Peru, Bolivia, and Chile.
          </p>
          <p>
            Standing about 3 feet tall at the shoulder and weighing 100–175 lbs, alpacas
            are renowned for their incredibly soft fleece, which comes in 22 natural
            colors and is prized by textile makers worldwide.
          </p>
          <p>
            Unlike their larger llama cousins, alpacas are not typically used as pack
            animals. Their main contribution to human life is their luxurious fiber —
            and, of course, their irresistibly expressive faces.
          </p>
        </div>
        <img
          className="about-img"
          src="https://images.pexels.com/photos/31877260/pexels-photo-31877260.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="Close-up portrait of an alpaca"
        />
      </div>
    </section>
  )
}
