import { useState } from 'react';
import { send } from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('');

    // Validation simple
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Veuillez remplir tous les champs.');
      setIsSubmitting(false);
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setStatus("L'adresse e-mail n'est pas valide.");
      setIsSubmitting(false);
      return;
    }

    try {
      await send(
        'service_qqj35tq', 
        'template_3mjzjd9',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'zI4fG8p7Kb2uHTEN7'
      );
      setStatus('Message envoyé avec succès ! Je vous répondrai bientôt.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus("Erreur lors de l'envoi du message. Veuillez réessayer.");
    }
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 bg-neutral-50 dark:bg-neutral-800 animate-fadeIn">
      <div className="max-w-lg mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-3xl sm:text-4xl font-bold mb-8 text-center animate-scaleIn font-sans"
        >
          Contactez-moi
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-neutral-600 dark:text-neutral-400 font-medium font-sans mb-2">
              Nom
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Votre nom"
              className="w-full p-3 rounded-lg bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 animate-fadeIn font-sans"
              style={{ animationDelay: '0.1s' }}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-neutral-600 dark:text-neutral-400 font-medium font-sans mb-2">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@email.com"
              className="w-full p-3 rounded-lg bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 animate-fadeIn font-sans"
              style={{ animationDelay: '0.2s' }}
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-neutral-600 dark:text-neutral-400 font-medium font-sans mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Votre message"
              rows="5"
              className="w-full p-3 rounded-lg bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 animate-fadeIn font-sans"
              style={{ animationDelay: '0.3s' }}
              required
            ></textarea>
          </div>
          {status && (
            <p className={`text-center font-medium font-sans ${status.includes('succès') ? 'text-green-600' : 'text-red-600'}`}>
              {status}
            </p>
          )}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/80 hover:scale-105 transition-all duration-300 animate-bounce font-sans disabled:opacity-50"
            style={{ animationDelay: '0.4s' }}
          >
            {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;