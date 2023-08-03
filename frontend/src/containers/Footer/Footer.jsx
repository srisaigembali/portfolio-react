import React from "react";

import images from "../../constants/images";
import MotionWrap from "../../wrapper/MotionWrap";
import AppWrap from "../../wrapper/AppWrap";
// import { client } from "../../client";
import "./Footer.scss";
import { SiGeeksforgeeks, SiLeetcode } from "react-icons/si";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // });
  // const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  // const [loading, setLoading] = useState(false);

  // const { username, email, message } = formData;

  // const handleChangeInput = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  // const handleSubmit = () => {
  //   setLoading(true);

  //   const contact = {
  //     _type: "contact",
  //     grants: [
  //       {
  //         permissions: ["create", "update", "read"],
  //       },
  //     ],
  //     name: formData.username,
  //     email: formData.email,
  //     message: formData.message,
  //   };

  //   client
  //     .create(contact)
  //     .then(() => {
  //       setLoading(false);
  //       setIsFormSubmitted(true);
  //     })
  //     .catch((err) => console.log(err));
  // };

  return (
    <>
      <h2 className='head-text'>Take a coffee & chat with me</h2>

      <div className='app__footer-cards'>
        <div className='app__footer-card '>
          <img src={images.email} alt='email' />
          <a href='mailto:srisaigembali2000@gmail.com' className='p-text'>
            srisaigembali2000@gmail.com
          </a>
        </div>
        <div className='app__footer-card'>
          <img src={images.mobile} alt='phone' />
          <a href='tel:+91 9861662325' className='p-text'>
            +91 9861662325
          </a>
        </div>
      </div>
      <a
        className='app__resume'
        href={images.resume}
        download="Srisai's Resume"
        target='_blank'
        rel='noreferrer'
      >
        <button>Download Resume</button>
      </a>
      <div className='socials'>
        <div style={{ cursor: "pointer" }} title='linkedin'>
          <a
            href='https://www.linkedin.com/in/srisai-gembali-9a4b81205/'
            target='_blank'
            rel='noreferrer'
            style={{ marginTop: "2.5px" }}
          >
            <BsLinkedin />
          </a>
        </div>
        <div style={{ cursor: "pointer" }} title='github'>
          <a
            href='https://github.com/srisaigembali'
            target='_blank'
            rel='noreferrer'
            style={{ marginTop: "2.5px" }}
          >
            <BsGithub />
          </a>
        </div>
        <div style={{ cursor: "pointer" }} title='leetcode'>
          <a
            href='https://leetcode.com/srisaigembali/'
            target='_blank'
            rel='noreferrer'
            style={{ marginTop: "2.5px" }}
          >
            <SiLeetcode />
          </a>
        </div>
        <div style={{ cursor: "pointer" }} title='leetcode'>
          <a
            href='https://auth.geeksforgeeks.org/user/srisaigembali2000/practice'
            target='_blank'
            rel='noreferrer'
            style={{ marginTop: "2.5px" }}
          >
            <SiGeeksforgeeks />
          </a>
        </div>
      </div>
      <div className='copyright'>
        <p className='p-text'>@2023 SRISAI</p>
        <p className='p-text'>All rights reserved</p>
      </div>
      {/* {!isFormSubmitted ? (
        <div className='app__footer-form app__flex'>
          <div className='app__flex'>
            <input
              className='p-text'
              type='text'
              placeholder='Your Name'
              name='username'
              value={username}
              onChange={handleChangeInput}
            />
          </div>
          <div className='app__flex'>
            <input
              className='p-text'
              type='email'
              placeholder='Your Email'
              name='email'
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className='p-text'
              placeholder='Your Message'
              value={message}
              name='message'
              onChange={handleChangeInput}
            />
          </div>
          <button type='button' className='p-text' onClick={handleSubmit}>
            {!loading ? "Send Message" : "Sending..."}
          </button>
        </div>
      ) : (
        <div>
          <h3 className='head-text'>Thank you for getting in touch!</h3>
        </div>
      )} */}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__primarybg"
);
