import emailjs from '@emailjs/browser';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault(); // prevents the page from reloading when you hit “Send”

        emailjs.sendForm('service_2xbk5cc', 'template_hx5ncmx', e.target, '2xDZA9oINNkYP__kZ')
            .then((result) => {
                console.log(result.text);
                // show the user a success message
            }, (error) => {
                console.log(error.text);
                // show the user an error
            });
        alert('Your message is sent');
        e.target.reset();
    };
    return (
        <section
            className='mt-32'

            style={{ backgroundImage: `url("https://i.ibb.co/HHt3kPJ/modern-background-with-lines.jpg")` }}

        >
            <form onSubmit={sendEmail}>
                <h2 className="text-xl text-center text-white">Any Query</h2>
                <h4 className="text-4xl text-center text-white">Send Us Your Message</h4>
                <div className='grid grid-cols-1 lg:grid-cols-1 gap-4 w-1/2 mx-auto py-12'>
                    <input name='name' type="text" placeholder="name" className="input input-bordered w-full" />
                    <input name='email' type="text" placeholder="Your email" className="input input-bordered w-full" />
                    <textarea name='message' className="textarea textarea-bordered h-24" placeholder="Your message" required></textarea>
                    {/* <input className='btn mx-auto' type='submit' value='Message me'></input> */}
                    <button><PrimaryButton>Message</PrimaryButton></button>

                </div>

            </form>
        </section>
    );
};

export default Contact;