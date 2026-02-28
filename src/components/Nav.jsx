export default function Nav() {
  return (
    <nav>
      <div className="nav-logo">
        <img src="/logo.png" alt="Opaca logo" height={64} />
        <span className="nav-wordmark">Opaca</span>
      </div>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#facts">Facts</a></li>
        <li><a href="#breeds">Breeds</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#lore">Lore</a></li>
      </ul>
    </nav>
  )
}
