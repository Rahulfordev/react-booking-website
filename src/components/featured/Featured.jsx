import Container from "../common/Container";
import Title from "../common/Title";
import "./featured.css";

const Featured = () => {
  return (
    <div className="featured-section">
      <Container>
        <Title
          head="Popular Destinations"
          desc="An enim nullam tempor gravida donec enim congue magna at pretium."
        />
        <div className="featured">
          <div className="featuredItem">
            <img
              src="https://demo.ovatheme.com/tripgo/wp-content/uploads/2022/07/destination-8.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Viet Nam</h1>
              <button className="featured__button">Tours 01</button>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://demo.ovatheme.com/tripgo/wp-content/uploads/2022/07/destination-01.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Europe</h1>
              <button className="featured__button">Tours 02</button>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://demo.ovatheme.com/tripgo/wp-content/uploads/2022/07/destination-03.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>East Asia</h1>
              <button className="featured__button">Tours 03</button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Featured;
