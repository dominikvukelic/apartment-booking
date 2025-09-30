import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message_subject: '',
    message: '',
  });
  const [statusMessage, setStatusMessage] = useState('');
  const [isMessageVisible, setIsMessageVisible] = useState(false);
  const [buttonText, setButtonText] = useState('Pošalji'); // State za tekst gumba
  const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText('Šalje se...'); // Opcionalno dok šalje

    emailjs.sendForm('service_agm', 'template_hcre1xf', form.current, 'HD2zlLyAop9U0owzd')
      .then((result) => {
        setStatusMessage('Vaša poruka je uspješno poslana!');
        setIsMessageVisible(true);
        setButtonText('Poslano!'); // Promjena teksta gumba
        setFormData({
          user_name: '',
          user_email: '',
          message_subject: '',
          message: '',
        });
      })
      .catch((error) => {
        setStatusMessage('Došlo je do pogreške pri slanju poruke. Pokušajte ponovno.');
        setIsMessageVisible(true);
        setButtonText('Pošalji'); // Vrati tekst gumba ako je greška
        console.error('Greška pri slanju e-maila:', error);
      });
  };

  useEffect(() => {
    if (isMessageVisible) {
      const timer = setTimeout(() => {
        setIsMessageVisible(false);
        setButtonText('Pošalji'); // Vrati tekst gumba nakon 5 sekundi
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isMessageVisible]);

  return (
    <div>
      <form ref={form} onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="user_name">Ime i prezime:</label>
          <input
            type="text"
            id="user_name"
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="user_email">Email:</label>
          <input
            type="email"
            id="user_email"
            name="user_email"
            value={formData.user_email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message_subject">Naslov poruke:</label>
          <input
            type="text"
            id="message_subject"
            name="message_subject"
            value={formData.message_subject}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Poruka:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        {isMessageVisible && <p>{statusMessage}</p>}
        <button type="submit">{buttonText}</button>
      </form>
    </div>
  );
}

export default ContactForm;




