import TitleHeader from "../components/TitleHeader.jsx";

const Contact = () => {
    return (
        <div id='contact' className='flex-center section-padding'>
            <div className="w-full h-full md:px-10 px-5">
                <TitleHeader title="Get In Touch" sub="📬 Let's Connect"/>
                
                <div className="mt-10 text-center">
                    <p className="text-lg mb-4">
                        Have a question or want to work together? Feel free to reach out!
                    </p>
                    <p className="text-lg">
                        Email: <a href="mailto:contact@example.com" className="text-blue-500 hover:underline">contact@example.com</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Contact