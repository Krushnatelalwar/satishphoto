import { FormEvent, useEffect, useMemo, useState } from 'react';
import {
  ArrowDown, ArrowUp, ArrowUpRight, CheckCircle2, ChevronLeft, ChevronRight, Clock3, Instagram, Mail,
  MapPin, Menu, MessageCircle, Phone, Play, X
} from 'lucide-react';

type PortfolioItem = { title: string; category: string; image: string; size: string };

const studioImages = {
  hero: 'https://images.jdmagicbox.com/v2/comp/pune/d6/020pxx20.xx20.230102132056.l3d6/catalogue/satish-photo-frame-and-photo-studio-wakad-pune-photo-studios-wi1q3n0l2y.jpg',
  intro: '/images/19.jpeg',
  maternity: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1000&q=85',
  baby: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=1000&q=85',
  family: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&w=1200&q=85',
  frames: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85',
};

const services = [
  { number: '01', title: 'Shaadi Stories', text: 'The quiet glances, loud laughter, sacred rituals, and everything in between — your celebration, your way.', image: 'https://media.weddingz.in/images/26034061e05961360744f7206026c06b/auspicious-marriage-dates-2019-2020-1.jpg' },
  { number: '02', title: 'Pre-Wedding', text: 'A visual love letter, created around your rhythm, your places, and your story.', image: 'https://weddingdiariesbyomp.com/wp-content/uploads/Prewedding-Shoot-in-Goa_Palolem-Beach.webp' },
  { number: '03', title: 'Maternity', text: 'Soft, assured portraits that hold the wonder of this once-in-a-lifetime chapter.', image: 'https://images.squarespace-cdn.com/content/v1/59952dbb7131a577ad08b273/1727220859314-BIAJ2P36QLNPLXUJYXWY/Fremont+at+home+lifstyle+maternity+session+wearing+saree++2.jpg' },
  { number: '04', title: 'Baby & Newborn', text: 'Tender beginnings and tiny details, photographed with patience and care.', image: 'https://chitrageek.com/wp-content/uploads/2026/09/varanasi-baby-desktop-banner.webp' },
  { number: '05', title: 'Family Portraits', text: 'Honest, joyful photographs for the people and seasons you never want to forget.', image: 'https://media.istockphoto.com/id/2167804581/photo/happy-indian-family-celebrating-diwali-at-home-with-traditional-attire.jpg?s=612x612&w=0&k=20&c=tHnxsqZrN-sJDU7UX7SXL0dQ5q1vZ_yUWTBgUUwJTTU=' },
  { number: '06', title: 'Frames & Prints', text: 'Turn the images you love into beautiful pieces that belong in your home, with a touch of tradition.', image: 'https://images.jdmagicbox.com/v2/comp/pune/d6/020pxx20.xx20.230102132056.l3d6/catalogue/satish-photo-frame-and-photo-studio-wakad-pune-photographers-k51rdqosn1.jpg' },
];

const portfolio: PortfolioItem[] = [
  { title: 'The Wedding Edit', category: 'Weddings', image: studioImages.hero, size: 'tall' },
  { title: 'Before Forever', category: 'Pre-Weddings', image: '/images/13.jpeg', size: 'wide-tall' },
  { title: 'A New Beginning', category: 'Maternity', image: '/images/4.jpeg', size: 'standard' },
  { title: 'Little Light', category: 'Newborn', image: 'https://meghnarathorephotography.com/wp-content/uploads/2023/03/meghna-rathore-photography-gurgaon-best-baby-photographer-3-month-4-month-baby-photoshoot.jpg', size: 'wide' },
  { title: 'Together, Always', category: 'Family', image: '/images/3.jpeg', size: 'wide' },
  { title: 'The Portrait Room', category: 'Portraits', image: '/images/16.jpeg', size: 'tall' },
  { title: 'Celebrations', category: 'Events', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=85', size: 'standard' },
  { title: 'Made to Keep', category: 'Photo Frames', image: '/images/17.jpeg', size: 'wide' },
];

const categories = ['All', 'Weddings', 'Pre-Weddings', 'Maternity', 'Newborn', 'Family', 'Portraits', 'Events', 'Photo Frames'];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [filter, setFilter] = useState('All');
  const [activeImage, setActiveImage] = useState<number | null>(null);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const filteredPortfolio = useMemo(() => filter === 'All' ? portfolio : portfolio.filter((item) => item.category === filter), [filter]);

  const openWhatsApp = (message: string) => window.open(`https://wa.me/919637947644?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');

  const submitInquiry = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = `Hello Satish Photo Frame & Photo Studio,\n\nI would like to make an inquiry.\nName: ${data.get('name')}\nPhone: ${data.get('phone')}\nEmail: ${data.get('email') || 'Not provided'}\nService: ${data.get('service')}\nPreferred date: ${data.get('date') || 'Not decided'}\nMessage: ${data.get('message')}`;
    setSent(true);
    openWhatsApp(message);
  };

  return (
    <div className="site-shell">
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <a href="#home" className="wordmark" onClick={() => setMenuOpen(false)}><span>SATISH</span><small>PHOTO FRAME & PHOTO STUDIO</small></a>
        <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'}>
          {['Home', 'About', 'Services', 'Portfolio', 'Gallery', 'Contact'].map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>)}
          <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>Book a shoot <ArrowUpRight size={15} /></a>
        </nav>
        <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={23} /> : <Menu size={23} />}</button>
      </header>

      <main>
        <section className="hero" id="home">
          <img src={studioImages.hero} alt="Couple celebrating their wedding together" className="hero-image" />
          <div className="hero-shade" />
          <div className="hero-content reveal-up">
            <p className="eyebrow light">शुभ · मंगल · स्मृतियाँ &nbsp; | &nbsp; Wakad · Thergaon · Pune</p>
            <h1>Every moment<br /><em>deserves</em> to be remembered.</h1>
            <p className="hero-copy">From your shaadi ke pal to the smallest family celebration, we preserve beautiful emotions and timeless memories with warmth.</p>
            <div className="hero-actions"><a className="button button-light" href="#portfolio">Explore our work <ArrowUpRight size={16} /></a><a className="text-link light" href="#contact">Book your session <span>↗</span></a></div>
          </div>
          <div className="scroll-cue"></div>
          <div className="hero-side-label">EST. WITH CARE · PHOTOGRAPHY & FRAMING</div>
        </section>

        <section className="intro section-pad" id="about">
          <div className="section-kicker"><span>01</span><span>THE STUDIO</span></div>
          <div className="intro-grid">
            <div className="intro-image-wrap"><img src={studioImages.intro} alt="Wedding couple sharing a quiet moment" /><span className="image-note">Moments, held gently.</span></div>
            <div className="intro-copy"><p className="eyebrow">Our point of view</p><h2>Photography is the art of <em>preserving emotions.</em></h2><p>At Satish Photo Frame & Photo Studio, we believe photographs are more than pictures. They are the feeling of a day, the people who made it special, and the stories you will return to for years.</p><p>From a first portrait to a once-in-a-lifetime celebration, we create images that feel like you.</p><a className="text-link dark" href="#services">Discover the studio <span>↗</span></a></div>
          </div>
        </section>

        <section className="services section-pad" id="services">
          <div className="section-heading"><div><p className="eyebrow">What we do</p><h2>Every story.<br /><em>Every emotion.</em> Every frame.</h2></div><p className="heading-aside">Thoughtful photography for the celebrations that matter — and beautiful frames for the memories you want close.</p></div>
          <div className="service-list">{services.map((service, index) => <article className={`service-row ${index % 2 ? 'reverse' : ''}`} key={service.number}><div className="service-number">{service.number}</div><div className="service-photo"><img src={service.image} alt={service.title} loading="lazy" /></div><div className="service-info"><h3>{service.title}</h3><p>{service.text}</p><a className="text-link dark" href="#contact">Explore service <span>↗</span></a></div></article>)}</div>
        </section>

        <section className="portfolio section-pad" id="portfolio">
          <div className="section-heading portfolio-heading"><div><p className="eyebrow">Selected work</p><h2>Stories we’ve<br /><em>captured.</em></h2></div><a className="text-link dark" href="#gallery">View the full gallery <span>↗</span></a></div>
          <div className="filters" role="tablist">{categories.map((category) => <button key={category} className={filter === category ? 'active' : ''} onClick={() => setFilter(category)}>{category}</button>)}</div>
          <div className="portfolio-grid">{filteredPortfolio.map((item, index) => <button className={`portfolio-item ${item.size}`} key={item.title} onClick={() => setActiveImage(index)}><img src={item.image} alt={item.title} loading="lazy" /><span className="portfolio-overlay"><small>{item.category}</small><strong>{item.title}</strong><ArrowUpRight size={18} /></span></button>)}</div>
        </section>

        <section className="statement" id="gallery"><div className="statement-inner"><p className="eyebrow light">Why Satish Studio</p><h2>Creating memories<br />that <em>stay forever.</em></h2><div className="statement-points"><span><b>01</b> Attention to every detail</span><span><b>02</b> Emotion-driven photography</span><span><b>03</b> Personalized photoshoots</span><span><b>04</b> Memories worth preserving</span></div></div></section>

        <section className="framing section-pad"><div className="framing-grid"><div className="framing-copy"><p className="eyebrow">आपल्या आठवणी · The frame shop</p><h2>Your memories deserve<br /><em>a beautiful frame.</em></h2><p>From a single portrait to a wall full of family stories, we help you turn photographs into something you can live with every day.</p><a className="button button-dark" href="#contact">Explore photo framing <ArrowUpRight size={16} /></a></div><div className="framing-image"><img src={studioImages.frames} alt="Elegant framed artwork in a warm interior" loading="lazy" /><span>Made to keep.</span></div></div></section>

        <section className="contact section-pad" id="contact"><div className="contact-heading"><p className="eyebrow">Start a conversation</p><h2>Let’s make your moments <em>unforgettable.</em></h2><p>Share a few details and we’ll help you choose the right session for your family, celebration, or framing project.</p></div><div className="contact-grid"><aside className="contact-intro"><div className="contact-card-intro"><span className="contact-symbol">ॐ</span><div><strong>Visit the studio</strong><span>Wakad · Thergaon · Pune</span></div></div><div className="contact-details"><a href="tel:+919637947644"><Phone size={16} /> <span><small>Call us</small>+91 96379 47644</span></a><a href="mailto:frame.satish@gmail.com"><Mail size={16} /> <span><small>Email us</small>frame.satish@gmail.com</span></a><a href="https://maps.google.com/?q=Datta+Mandir+Road+Wakad+Pune" target="_blank" rel="noreferrer"><MapPin size={16} /> <span><small>Find us</small>Get directions <ArrowUpRight size={13} /></span></a></div><div className="contact-hours"><Clock3 size={16} /><span><strong>We’re happy to help</strong><small>Call or WhatsApp for a quick response.</small></span></div></aside><form className="inquiry-form" onSubmit={submitInquiry}><div className="form-topline"><span>Tell us about your plans</span><small>All fields marked * are required</small></div><div className="form-row"><label>Full name *<input required name="name" placeholder="Your name" /></label><label>Phone number *<input required name="phone" type="tel" placeholder="+91 00000 00000" /></label></div><div className="form-row"><label>Email address<input name="email" type="email" placeholder="you@email.com" /></label><label>What are you looking for? *<select required name="service" defaultValue=""><option value="" disabled>Select a service</option>{services.map((service) => <option key={service.title}>{service.title}</option>)}</select></label></div><div className="form-row form-row-message"><label>Preferred date<input name="date" type="date" /></label><label>Tell us more *<textarea required name="message" placeholder="Tell us what you’re celebrating or framing..." rows={3} /></label></div><button className="button button-dark form-submit" type="submit">{sent ? 'Open WhatsApp message' : 'Send my enquiry'} <MessageCircle size={16} /></button>{sent ? <p className="form-success" role="status"><CheckCircle2 size={17} /> Your enquiry is ready. WhatsApp has opened so you can send it to Satish Studio.</p> : <p className="form-note">We’ll open WhatsApp with your details ready to send. No information is stored on this website.</p>}</form></div></section>
      </main>

      <footer className="footer"><div className="footer-top"><a href="#home" className="wordmark footer-mark"><span>SATISH</span><small>PHOTO FRAME & PHOTO STUDIO</small></a><p>Photographs for your now.<br />Frames for your always.</p><div className="footer-social"><a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={18} /></a><a href="mailto:frame.satish@gmail.com" aria-label="Email"><Mail size={18} /></a><a href="tel:+919637947644" aria-label="Phone"><Phone size={18} /></a></div></div><div className="footer-bottom"><span>© 2026 Satish Photo Frame & Photo Studio</span><a href="https://nexerax.vercel.app/">© Developed by NexreaX</a><a href="#home">Back to top <ArrowUp size={14} /></a></div></footer>

      <a className="whatsapp-float" href="https://wa.me/919637947644" target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><MessageCircle size={20} /></a>
      {activeImage !== null && <div className="lightbox" role="dialog" aria-modal="true"><button className="lightbox-close" onClick={() => setActiveImage(null)} aria-label="Close"><X /></button><button className="lightbox-nav prev" onClick={() => setActiveImage((activeImage - 1 + filteredPortfolio.length) % filteredPortfolio.length)} aria-label="Previous"><ChevronLeft /></button><img src={filteredPortfolio[activeImage].image} alt={filteredPortfolio[activeImage].title} /><button className="lightbox-nav next" onClick={() => setActiveImage((activeImage + 1) % filteredPortfolio.length)} aria-label="Next"><ChevronRight /></button><div className="lightbox-caption"><small>{filteredPortfolio[activeImage].category}</small><strong>{filteredPortfolio[activeImage].title}</strong></div></div>}
    </div>
  );
}

export default App;
