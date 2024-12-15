import React from "react";

const About = () => {
  return (
    <div className="mb-20">
      <h1 className="sm:text-4xl text-2xl font-bold my-6 text-gray-900">
        {" "}
        About MERN Blog
      </h1>

      <p className="mx-auto leading-relaxed text-base mb-4">
        Welcome to MERN Blog, your ultimate destination for learning, exploring,
        and mastering the MERN stack! My name is Hansaka Ravishan, a passionate
        full-stack developer and the creator of this platform. You can find my
        projects and connect with me on GitHub, LinkedIn, and Twitter.
      </p>
      <h2 className="sm:text-3xl text-xl font-bold my-6 text-gray-900">
        Our Mission
      </h2>
      <p className="mx-auto leading-relaxed text-base mb-4">
        The primary goal of MERN Blog is to demystify the complexities of
        full-stack development and make learning the MERN stack—MongoDB,
        Express.js, React.js, and Node.js—an engaging and fulfilling experience.
        Whether you're a beginner taking your first steps in coding or an
        experienced developer looking to sharpen your skills, MERN Blog has
        something for you.
      </p>

      <h2 className="sm:text-3xl text-xl font-bold my-6 text-gray-900">
        Why the MERN Stack?
      </h2>
      <p className="mx-auto leading-relaxed text-base mb-4">
        The MERN stack has rapidly become one of the most popular technology
        stacks in the world of web development. It combines the best features of
        MongoDB for data management, Express.js for robust server-side logic,
        React.js for dynamic and interactive front-end development, and Node.js
        for scalable, high-performance backends.
      </p>
      <p className="mx-auto leading-relaxed text-base mb-4">
        With MERN Blog, we aim to provide a comprehensive resource for
        understanding how these technologies work together seamlessly to create
        powerful, scalable web applications. We delve into each component,
        providing insights, tutorials, and real-world examples that empower you
        to build your own full-stack applications.
      </p>

      <h2 className="sm:text-3xl text-xl font-bold my-6 text-gray-900">
        What You'll Find Here
      </h2>
      <ul className="list-disc list-inside mb-4">
        <li className="mb-2">
          In-Depth Tutorials: Step-by-step guides on building with the MERN
          stack.
        </li>
        <li className="mb-2">
          Best Practices: Tips for structuring projects and optimizing
          performance.
        </li>
        <li className="mb-2">
          Real-World Examples: Practical use cases for MERN stack applications.
        </li>
        <li className="mb-2">
          Community Contributions: Insights and tutorials from developers
          worldwide.
        </li>
        <li className="mb-2">
          Interviews and Insights: Advice from industry leaders and successful
          developers.
        </li>
      </ul>

      <h2 className="sm:text-3xl text-xl font-bold my-6 text-gray-900">
        Who Am I?
      </h2>
      <p className="mx-auto leading-relaxed text-base mb-4">
        My name is <span className="font-bold">Hansaka Ravishan</span>, and I am a
        full-stack developer with a passion for creating impactful web
        applications and sharing knowledge. My journey in technology began [a
        brief history of your development background]. Over the years, I’ve
        worked on diverse projects that have deepened my expertise in the MERN
        stack and other modern technologies.
      </p>
      <p className="mx-auto leading-relaxed text-base mb-4">
        When I’m not coding, I enjoy contributing to open-source projects,
        mentoring aspiring developers, and exploring the ever-evolving world of
        web development. My personal mission is to make learning technology
        accessible and enjoyable for everyone.
      </p>
      <p className="mx-auto leading-relaxed text-base mb-4">
        Feel free to check out my work and connect with me on:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>
          <a
            href="https://github.com/shana2002"
            className="text-blue-500 hover:underline"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href="www.linkedin.com/in/hansaka-ravishan"
            target="_blank"
            className="text-blue-500 hover:underline"
          >
            LinkedIn
          </a>
        </li>
      </ul>

      <h2 className="sm:text-3xl text-xl font-bold my-6 text-gray-900">
        Our Vision
      </h2>
      <p className="mx-auto leading-relaxed text-base mb-4">
        MERN Blog aspires to be more than just a learning platform. We envision
        a thriving community where developers from around the globe can
        collaborate, share knowledge, and inspire each other. By fostering a
        supportive environment, we aim to contribute to the growth of the global
        developer community and empower individuals to achieve their
        professional goals.
      </p>

      <h2 className="sm:text-3xl text-xl font-bold my-6 text-gray-900">
        Join the Journey
      </h2>
      <p className="mx-auto leading-relaxed text-base mb-4">
        Whether you're building your first application or scaling up to handle
        millions of users, MERN Blog is here to guide you every step of the way.
        We encourage you to subscribe to our newsletter, follow us on social
        media, and become an active member of our growing community.
      </p>
      <p className="mx-auto leading-relaxed text-base mb-4">
        If you have suggestions, feedback, or topics you'd like us to cover,
        don't hesitate to reach out. Together, let's unlock the full potential
        of the MERN stack and make web development an exciting and rewarding
        experience for everyone.
      </p>

      <p className="mx-auto leading-relaxed text-base mb-4 font-bold">
        Thank you for visiting MERN Blog. Let’s build something amazing!
      </p>
    </div>
  );
};

export default About;
