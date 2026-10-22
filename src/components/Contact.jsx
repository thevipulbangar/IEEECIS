import { CLUB } from '../data.js';
import { useNetlifyForm } from '../utils.js';

// Field names must match the hidden "contact" form in index.html.
export default function Contact() {
  const { status, sending, onSubmit } = useNetlifyForm('Message sent. We will reply to your email.');

  return (
    <section id="contact" className="section section-deep">
      <div className="wrap">
        <h2 className="section-title">Contact us</h2>
        <a className="contact-email" href={'mailto:' + CLUB.email}>{CLUB.email}</a>
        <div className="form-layout">
          <ul className="contact-links">
            <li><span>Instagram</span><a href={CLUB.instagram} target="_blank" rel="noopener">{CLUB.instagramHandle}</a></li>
            <li><span>LinkedIn</span><a href={CLUB.linkedin} target="_blank" rel="noopener">{CLUB.linkedinName}</a></li>
            <li><span>Find us at</span>{CLUB.address}</li>
          </ul>
          <form name="contact" className="form" onSubmit={onSubmit}>
            <input type="hidden" name="form-name" value="contact" />
            <p hidden><label>Leave this empty: <input name="bot-field" /></label></p>
            <label>Name <input name="name" autoComplete="name" required /></label>
            <label>Email <input type="email" name="email" autoComplete="email" required /></label>
            <label className="full">Message <textarea name="message" rows="5" required /></label>
            <button className="btn full" type="submit" disabled={sending}>Send message</button>
            <p className="form-status full" role="status">{status}</p>
          </form>
        </div>
      </div>
    </section>
  );
}
