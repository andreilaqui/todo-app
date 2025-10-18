// 🔧 Core React
import React, { useContext, useState } from 'react';

// 🌓 Theme
import { ThemeContext } from '../contexts/ThemeContext';

// 🎨 Styles
const contactStyleLight = `
  max-w-md mx-auto mt-10 p-4
  bg-white shadow-[4px_4px_8px_#aeaeae,-4px_-4px_8px_#ffffff66]
  rounded shadow`;

const contactStyleDark = `
  max-w-md mx-auto mt-10 p-4
  bg-gray-800 text-white
  shadow-[4px_4px_8px_#1a1a1a,-4px_-4px_8px_#ffffff22] rounded`;

const inputTextStyleLight = `
  w-full px-4 py-2 rounded-lg
  bg-[#efefef] text-gray-950
  shadow-inner
  focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-300`;

const inputTextStyleDark = `
  w-full px-4 py-2 rounded-lg
  bg-gray-950 text-white
  shadow-inner
  focus:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500`;

const buttonStyleLight = `
  px-4 py-2 rounded-lg
  bg-[#e0e0e0] text-gray-800
  shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff]
  hover:bg-blue-500 hover:text-white hover:shadow-none
  active:scale-95 transition-all duration-150`;

const buttonStyleDark = `
  px-4 py-2 rounded-lg
  bg-gray-600 text-white
  shadow-[4px_4px_8px_#1a1a1a,-4px_-4px_8px_#ffffff22]
  hover:bg-blue-600 hover:text-white hover:shadow-none
  active:scale-95 transition-all duration-150`;

export default function Contact() {
  // 🌗 Theme and Style
  const { theme } = useContext(ThemeContext);
  const contactStyle = theme === 'dark' ? contactStyleDark : contactStyleLight;
  const inputTextStyle = theme === 'dark' ? inputTextStyleDark : inputTextStyleLight;
  const buttonStyle = theme === 'dark' ? buttonStyleDark : buttonStyleLight;

  // 📝 Form state
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // 📤 Handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const mailto = `mailto:a.laqui837@mybvc.ca?subject=Message from ${encodeURIComponent(
      email
    )}&body=${encodeURIComponent(e.target.message.value)}`; //had to use e.target because I don't know the message text because it's uncontrolled
    window.location.href = mailto;
  };

  // 🧱 JSX
  return (
    <div className={contactStyle}>
      <h2 className="text-xl font-bold mx-auto w-fit mb-4">Contact Me</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Your email"
          required
          className={inputTextStyle}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /> {/*controlled element */}
        <textarea
          name="message"
          placeholder="Your message"
          rows="4"
          required
          className={inputTextStyle}
        />{/*uncontrolled element */}
        <button type="submit" className={buttonStyle}>
          Send Email
        </button>
      </form>
    </div>
  );
}
