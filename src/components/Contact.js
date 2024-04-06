const Contact = ()=> {
    return (
        <div>
            <h1 className="font-bold text-3xl p-2 m-1">Contact Us</h1>
            {/* <h2 className="font-bold text-xl px-3">I don't have a phone number</h2> */}

            <form action="">
                <label htmlFor="name" className="mx-2">Name : </label>
                <input type="text" id ="name" className="border border-black p-2 m-2 rounded-sm focus:outline-none focus:border-green-300" placeholder="Enter your name"/>

                <label htmlFor="message" className="mx-2">Message : </label>
                <input type="text" id="message" className="border border-black p-2 m-2 rounded-sm focus:outline-none focus:border-green-300" placeholder="Enter your message"/>
                <button className="px-4 py-1 bg-black text-white rounded-md">Submit</button>
            </form>
        </div>
    );
}

export default Contact;