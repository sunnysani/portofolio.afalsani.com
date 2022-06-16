import LinkedinLogo from "./assets/SocialMedia/Linkedin.png";
import InstagramLogo from "./assets/SocialMedia/Instagram.png";
import GithubLogo from "./assets/SocialMedia/Github.png";

function App() {
  return (
    <div className="main">
      <h1>Hello but sorry, this web is still under construction.</h1>
      <section>
        <p>
          Anyway, get to know me! My name's Naufal Sani. I am studying Computer
          Science at{" "}
          <a className="university" href="cs.ui.ac.id">
            Universitas&nbsp;Indonesia
          </a>{" "}
          for now.
        </p>
        <p>
          I code in Python, Java, and Web Necessary (HTML, CSS, Javascript).
          This website is created using ReactJS Library and managed/deployed on
          Google Cloud Platform (GCP) with DNS + SSL managed at GCP. Thanks to
          my Uni who gives GCP credit to the students 😆.
        </p>
        <p>
          This website is currently being built by me to showcase what I've
          built. But for now, you can know me more from links below.
        </p>
      </section>
      <hr />
      <section>
        <h3>Know me more</h3>
        <div className="knowme">
          <a href="https://www.linkedin.com/in/naufal-sani-19271a192/">
            <img alt="linkedin" src={LinkedinLogo} />
          </a>
          <a href="https://www.instagram.com/afalsani/">
            <img alt="instagram" src={InstagramLogo} />
          </a>
          <a href="https://github.com/sunnysani">
            <img alt="github" src={GithubLogo} />
          </a>
        </div>
      </section>
      <hr />
      <section>
        <p>
          <a href="https://drive.google.com/drive/folders/1TdoJH1L4BRmU8w1TtZAYdh46REOXhcig?usp=sharing">
            Click here to see my CV
          </a>
        </p>
        <p>
          <i>@Naufal Sani, 2022</i>
        </p>
      </section>
    </div>
  );
}

export default App;
