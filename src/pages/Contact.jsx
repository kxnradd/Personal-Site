import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const formData = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = process.env.REACT_APP_SERVICE_ID;
    const templateID = process.env.REACT_APP_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_PUBLIC_KEY;
    
    emailjs.sendForm(serviceID, templateID, formData.current, publicKey).then(
      () => {
        alert('Message sent successfully!');
        formData.current.reset();
      },
      (error) => {
        alert('Failed to send message, please try again later.');
      }
    )

  };

  return (
    <div className="max-w-2xl mx-auto p-6 pt-36">
      <h1 className="text-4xl font-bold mb-6 text-center">Contact Me</h1>
      <form ref = {formData} onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            className="w-full p-2 border rounded text-gray-900"
            required
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            className="w-full p-2 border rounded text-gray-900"
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            className="w-full p-2 border rounded text-gray-900"
            required
          />
        </div>
        <div>
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            className="w-full p-2 border rounded h-32 text-gray-900"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;