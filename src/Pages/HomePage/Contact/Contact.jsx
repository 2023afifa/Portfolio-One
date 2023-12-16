import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };


    return (
        <div className="lg:mx-20 mb-20">
            <div className="hero" style={{ backgroundImage: 'url(https://i.ibb.co/2yrG316/banner.jpg)' }}>
                <div className="hero-overlay bg-opacity-30"></div>
                <div className="hero-content">
                    <div>
                        <h2 className="text-3xl font-bold mt-10 mb-3 text-center">Contact</h2>
                        <p className="mb-8 text-center">Feel free to reach out—I'd love to connect with you! Looking forward to hearing from you!</p>
                        <div className='flex justify-center'>
                            <form ref={form} onSubmit={sendEmail} className='w-2/3 mb-10'>
                                <label className='mr-2 text-xl'>Name</label><br />
                                <input className='mb-5 p-3 w-full' type="text" name="user_name" placeholder='Enter Your Name' /><br />
                                <label className='mr-2 text-xl'>Email</label><br />
                                <input className='mb-5 p-3 w-full' type="email" name="user_email" placeholder='Enter Your Email' /><br />
                                <label className='mr-2 text-xl'>Message</label><br />
                                <textarea className='mb-5 p-3 w-full h-40' name="message" placeholder='Enter Your Message' /><br />
                                <div className='text-center'><input type="submit" value="Send" className='bg-cyan-600 text-white px-6 py-2 rounded-sm' /></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;