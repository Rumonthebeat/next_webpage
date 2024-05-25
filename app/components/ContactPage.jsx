import React from 'react';

const ContactPage = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
        <form className="space-y-6" action="https://formspree.io/f/{your-form-id}" method="POST">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input id="name" name="name" type="text" autoComplete="name" required
                     className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                     placeholder="Name" />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email address</label>
              <input id="email" name="email" type="email" autoComplete="email" required
                     className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                     placeholder="Email address" />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea id="message" name="message" rows="4" required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Your message"></textarea>
            </div>
          </div>
          <div>
            <button type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactPage;
