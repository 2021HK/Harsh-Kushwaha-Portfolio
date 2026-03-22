import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

function Contact() {
  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: 'Email',
      value: 'kushwahaharsh2003@gmail.com',
      link: 'mailto:kushwahaharsh2003@gmail.com'
    },
    {
      icon: <FaPhone />,
      label: 'Phone',
      value: '+91 7879820077',
      link: 'tel:+917879820077'
    },
    {
      icon: <FaMapMarkerAlt />,
      label: 'Location',
      value: 'Bengaluru, Karnataka, India',
      link: null
    }
  ]

  return (
    <section id="contact" className="min-h-screen flex items-center py-20 bg-darker">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          <form action="https://formspree.io/f/xjgadlop" method="POST" className="bg-dark p-8 rounded-2xl shadow-lg mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="px-4 py-3 bg-darker border-2 border-primary/30 rounded-lg focus:outline-none focus:border-primary transition-colors text-white"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="px-4 py-3 bg-darker border-2 border-primary/30 rounded-lg focus:outline-none focus:border-primary transition-colors text-white"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone"
                className="px-4 py-3 bg-darker border-2 border-primary/30 rounded-lg focus:outline-none focus:border-primary transition-colors text-white"
              />
              <input
                type="text"
                name="subject"
                placeholder="Email Subject"
                required
                className="px-4 py-3 bg-darker border-2 border-primary/30 rounded-lg focus:outline-none focus:border-primary transition-colors text-white"
              />
            </div>

            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
              required
              className="w-full px-4 py-3 bg-darker border-2 border-primary/30 rounded-lg focus:outline-none focus:border-primary transition-colors resize-none mb-4 text-white"
            ></textarea>

            <button
              type="submit"
              className="w-full px-8 py-3 bg-primary text-dark font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all hover:-translate-y-1"
            >
              Send Message
            </button>
          </form>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <div 
                key={index}
                className="flex items-center gap-4 bg-dark p-4 rounded-lg hover:border-2 hover:border-primary transition-all"
              >
                <span className="text-3xl text-primary">{info.icon}</span>
                <div>
                  <p className="text-sm text-gray-400">{info.label}</p>
                  {info.link ? (
                    <a 
                      href={info.link}
                      className="text-white hover:text-primary transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-white">{info.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
