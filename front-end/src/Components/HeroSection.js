import "../Styles/HeroSection/hero_section.css";

export default function HeroSection() {
  return (
    <div className="container row main">
      <div className="main__description">
        <h1 className="main__title">Lorem Ipsum</h1>
        <p className="main__subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          omnis voluptate animi dolorem deserunt. Aut similique pariatur culpa
          vitae modi repellat.
        </p>
        <button className="main__button">Try it!</button>
      </div>
      <div>
        <img
          src="https://via.placeholder.com/450"
          alt="app"
          className="main__img"
        />
      </div>
    </div>
  );
}
