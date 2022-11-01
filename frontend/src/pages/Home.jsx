import "../index.css";

function Home() {
  return (
    <div>
      <div className="gif-container">
        <iframe
          title="Welcome gif"
          src="https://giphy.com/embed/l0MYC0LajbaPoEADu"
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Home;
