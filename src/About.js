// About.js
import React from "react";
import "./css/about.css";

const About = () => {
  return (
    <section className="about">
      <div id="expandable-section">
        <p>
          Hello there! 👋 My name is Oktay and I'm from Berlin, Germany. As a
          Full-Stack software developer, I specialize in creating visually
          appealing websites, apps and mobile games. My passion for graphic
          design isn't just a hobby, it's a key ingredient in every project I
          work on.
        </p>
        <div id="more">
          <p>
            Growing up bilingual, I developed a love for languages and I
            currently speak four of them fluently. I believe that this skill has
            given me a unique perspective and allows me to communicate
            effectively with clients from all over the world. One of my
            strengths is adding a personal touch to my projects by adding the
            client's identity and message into the design, creating meaningful
            and beautiful end products that are both eye-catching and
            user-friendly.
          </p>

          <p>
            In my free time, I enjoy exploring my other passions, such as
            photography and music production, which provide me with creative
            outlets. I am also very passionate about Web3 and everything related
            to crypto, NFTs and blockchain technology as I believe they have the
            potential to revolutionize business and online interactions.
          </p>
          <p>
            If you have an innovative idea for a project that needs to be
            developed, I would love to hear from you. Your vision can be turned
            into a real product. Don't hesitate to reach out and let's start a
            conversation about your concept. I'm excited to collaborate and help
            bring your ideas to life.
          </p>
        </div>
      </div>
      <section class="service">
        <h3 class="h3 service-title">Primary Focus</h3>

        <ul class="service-list">
          <li class="service-item">
            <div class="service-icon-box">
              <img
                src="https://oktayshakirov.com/assets/images/icon-dev.svg"
                alt="Web development icon"
                width="40"
              />
            </div>

            <div class="service-content-box">
              <h4 class="h4 service-item-title">
                Web Design &amp; Development
              </h4>

              <p class="service-item-text">
                Creating attractive, easy-to-use websites that work well for
                businesses and individuals online.
              </p>
            </div>
          </li>

          <li class="service-item">
            <div class="service-icon-box">
              <img
                src="https://oktayshakirov.com/assets/images/icon-app.svg"
                alt="mobile app icon"
                width="40"
              />
            </div>

            <div class="service-content-box">
              <h4 class="h4 service-item-title">Mobile Apps &amp; Games</h4>

              <p class="service-item-text">
                Creating and developing engaging mobile apps and games for iOS
                and Android devices.
              </p>
            </div>
          </li>

          <li class="service-item">
            <div class="service-icon-box">
              <img
                src="https://oktayshakirov.com/assets/images/icon-frameworks.svg
                "
                alt="frameworks icon"
                width="40"
              />
            </div>

            <div class="service-content-box">
              <h4 class="h4 service-item-title">Development Solutions</h4>

              <p class="service-item-text">
                Utilizing JavaScript frameworks like React, Node, Next, Vue and
                more to build interactive web applications.
              </p>
            </div>
          </li>

          <li class="service-item">
            <div class="service-icon-box">
              <img
                src="https://oktayshakirov.com/assets/images/icon-marketing.svg"
                alt="marketing icon"
                width="40"
              />
            </div>

            <div class="service-content-box">
              <h4 class="h4 service-item-title">Marketing &amp; SEO</h4>

              <p class="service-item-text">
                Using SEO and marketing strategies to boost online visibility
                and promote products or services.
              </p>
            </div>
          </li>
        </ul>

        <section class="service">
          <h3 class="h3 service-title">Exploring Creativity</h3>

          <ul class="service-list">
            <li class="service-item">
              <div class="service-icon-box">
                <img
                  src="./assets/images/icon-video.svg"
                  alt="video icon"
                  width="40"
                />
              </div>

              <div class="service-content-box">
                <h4 class="h4 service-item-title">Visual Storytelling</h4>

                <p class="service-item-text">
                  Taking and editing photos or videos that tell engaging
                  stories, bringing concepts and ideas to life visually.
                </p>
              </div>
            </li>

            <li class="service-item">
              <div class="service-icon-box">
                <img
                  src="./assets/images/icon-multimedia.svg"
                  alt="multimedia icon"
                  width="40"
                />
              </div>

              <div class="service-content-box">
                <h4 class="h4 service-item-title">Digital Content Creation</h4>

                <p class="service-item-text">
                  Creatiing dynamic digital content, such as 3D models, graphics
                  or animations.
                </p>
              </div>
            </li>
          </ul>
        </section>

        <h3 class="h3 languages-title">Languages</h3>

        <section class="languages content-card">
          <div class="languages-column">
            <h3 class="h3 languages-title-second">Coding Languages</h3>

            <ul class="languages-list">
              <li class="languages-item">
                <div class="title-wrapper">
                  <h5 class="h5">JavaScript</h5>
                  <data value="90">90%</data>
                </div>

                <div class="languages-progress-bg">
                  <div class="languages-progress-fill"></div>
                </div>
              </li>

              <li class="languages-item">
                <div class="title-wrapper">
                  <h5 class="h5">TypeScript</h5>
                  <data value="75">75%</data>
                </div>

                <div class="languages-progress-bg">
                  <div class="languages-progress-fill"></div>
                </div>
              </li>

              <li class="languages-item">
                <div class="title-wrapper">
                  <h5 class="h5">CSS</h5>
                  <data value="100">100%</data>
                </div>

                <div class="languages-progress-bg">
                  <div class="languages-progress-fill"></div>
                </div>
              </li>

              <li class="languages-item">
                <div class="title-wrapper">
                  <h5 class="h5">PHP</h5>
                  <data value="50">50%</data>
                </div>

                <div class="languages-progress-bg">
                  <div class="languages-progress-fill"></div>
                </div>
              </li>

              <li class="languages-item">
                <div class="title-wrapper">
                  <h5 class="h5">Python</h5>
                  <data value="25">25%</data>
                </div>

                <div class="languages-progress-bg">
                  <div class="languages-progress-fill"></div>
                </div>
              </li>
            </ul>
          </div>

          <div class="languages-column">
            <h3 class="h3 languages-title-second">Human Languages</h3>

            <ul class="languages-list">
              <li class="languages-item">
                <div class="title-wrapper">
                  <h5 class="h5">English</h5>
                  <data value="fluent">Fluent</data>
                </div>

                <div class="languages-progress-bg">
                  <div class="languages-progress-fill"></div>
                </div>
              </li>

              <li class="languages-item">
                <div class="title-wrapper">
                  <h5 class="h5">German</h5>
                  <data value="fluent">Fluent</data>
                </div>

                <div class="languages-progress-bg">
                  <div class="languages-progress-fill"></div>
                </div>
              </li>

              <li class="languages-item">
                <div class="title-wrapper">
                  <h5 class="h5">Bulgarian</h5>
                  <data value="fluent">Native</data>
                </div>

                <div class="languages-progress-bg">
                  <div class="languages-progress-fill"></div>
                </div>
              </li>

              <li class="languages-item">
                <div class="title-wrapper">
                  <h5 class="h5">Turkish</h5>
                  <data value="fluent">Bilingual</data>
                </div>

                <div class="languages-progress-bg">
                  <div class="languages-progress-fill"></div>
                </div>
              </li>

              <li class="languages-item">
                <div class="title-wrapper">
                  <h5 class="h5">Russian</h5>
                  <data value="fluent">Basic</data>
                </div>

                <div class="languages-progress-bg">
                  <div class="languages-progress-fill"></div>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <h3 class="h3 technologies-title">Development Skills</h3>

        <section class="technologies content-card" id="tech-skills">
          <ul class="technologies-list has-scrollbar slider ">
            <li class="technologies-item">
              <img
                src="https://oktayshakirov.com/assets/images/html.png"
                alt="HTML"
                id="1"
              />
            </li>

            <li class="technologies-item">
              <img
                src="https://oktayshakirov.com/assets/images/css.png"
                alt="CSS"
                id="2"
              />
            </li>

            <li class="technologies-item">
              <img
                src="https://oktayshakirov.com/assets/images/java-script.png"
                alt="Java Script"
                id="3"
              />
            </li>

            <li class="technologies-item">
              <img
                src="https://oktayshakirov.com/assets/images/react.png  "
                alt="React"
                id="4"
              />
            </li>

            <li class="technologies-item">
              <img
                src="https://oktayshakirov.com/assets/images/next.png"
                alt="Next"
                id="5"
              />
            </li>

            <li class="technologies-item">
              <img
                src="https://oktayshakirov.com/assets/images/node.png"
                alt="Node"
                id="6"
              />
            </li>

            <li class="technologies-item">
              <img
                src="https://oktayshakirov.com/assets/images/typescript.png"
                alt="Typescript"
                id="7"
              />
            </li>

            <li class="technologies-item">
              <img
                src="https://oktayshakirov.com/assets/images/npm.png"
                alt="Npm"
                id="8"
              />
            </li>

            <li class="technologies-item">
              <img
                src="https://oktayshakirov.com/assets/images/php.png"
                alt="PHP"
                id="9"
              />
            </li>

            <li class="technologies-item">
              <img
                src="https://oktayshakirov.com/assets/images/mysql.png"
                alt="MySQL"
                id="10"
              />
            </li>

            <li class="technologies-item">
              <img
                src="https://oktayshakirov.com/assets/images/python.png"
                alt="Python"
                id="11"
              />
            </li>

            <li class="technologies-item">
              <img
                src="https://oktayshakirov.com/assets/images/linux.png"
                alt="Linux"
                id="12"
              />
            </li>


          </ul>
        </section>

        <section class="hobbies">
          <h3 class="h3 hobbies-title">Favorite Activities</h3>

          <ul class="hobbies-list has-scrollbar">
            <li class="hobbies-item" id="1">
              <div class="content-card" data-hobbies-item="">
                <figure class="hobbies-avatar-box">
                  <img
                    src="./assets/images/finances.png"
                    alt="finances"
                    width="60"
                    data-hobbies-avatar=""
                  />
                </figure>

                <h4 class="h4 hobbies-item-title" data-hobbies-title="">
                  Investments
                </h4>

                <div class="hobbies-text" data-hobbies-text="">
                  <p>
                    Exploring Stocks, Crypto and Long-Term Growth Opportunities
                    for Financial Investment
                  </p>
                </div>
              </div>
            </li>

            <li class="hobbies-item" id="2">
              <div class="content-card" data-hobbies-item="">
                <figure class="hobbies-avatar-box">
                  <img
                    src="./assets/images/music.png"
                    alt="music"
                    width="60"
                    data-hobbies-avatar=""
                  />
                </figure>

                <h4 class="h4 hobbies-item-title" data-hobbies-title="">
                  Music
                </h4>

                <div class="hobbies-text" data-hobbies-text="">
                  <p>
                    Creating Instrumentals, Mixing and Mastering Tracks and
                    Collaborating with Musicians
                  </p>
                </div>
              </div>
            </li>

            <li class="hobbies-item" id="3">
              <div class="content-card" data-hobbies-item="">
                <figure class="hobbies-avatar-box">
                  <img
                    src="./assets/images/books.png"
                    alt="traveling"
                    width="60"
                    data-hobbies-avatar=""
                  />
                </figure>

                <h4 class="h4 hobbies-item-title" data-hobbies-title="">
                  Reading
                </h4>

                <div class="hobbies-text" data-hobbies-text="">
                  <p>
                    Books on Self-Improvement, Psychology and Understanding Life
                    Better.
                  </p>
                </div>
              </div>
            </li>

            <li class="hobbies-item" id="4">
              <div class="content-card" data-hobbies-item="">
                <figure class="hobbies-avatar-box">
                  <img
                    src="./assets/images/camera.png"
                    alt="photography"
                    width="60"
                    data-hobbies-avatar=""
                  />
                </figure>

                <h4 class="h4 hobbies-item-title" data-hobbies-title="">
                  Photography
                </h4>

                <div class="hobbies-text" data-hobbies-text="">
                  <p>
                    Capturing precious moments and memories through the lens of
                    a camera.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </section>

        <div class="pagination-box">
          <button
            class="pagination-button"
            data-nav-link=""
            data-target-section="certificates"
          >
            Next &gt;
          </button>
        </div>
      </section>
    </section>
  );
};

export default About;
