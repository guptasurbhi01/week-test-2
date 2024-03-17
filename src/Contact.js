// Contact.js
import React from "react";

const Contact = () => {
  return (
    <section className="container mx-auto my-8">
      <h2 className="text-3xl font-semibold mb-4">Contact Me</h2>
      <p className="text-gray-700">
        You can contact me via email at{" "}
        <a
          href="mailto:example@example.com"
          className="text-blue-600 hover:underline"
        >
          example@example.com
        </a>
        .
      </p>
    </section>
  );
};

export default Contact;
