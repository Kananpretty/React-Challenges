import "./Home.css";
import challengesData from "../../data/challengesData";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="challenge-index">
      <header className="challenge-index__header">
        <h1>Think. Build. React. Repeat.</h1>
        <p>
          A collection of hands-on React challenges designed to strengthen
          concepts, problem-solving, and implementation.
        </p>
      </header>

      <div className="challenge-table__wrapper">
        <table className="challenge-table">
          <thead>
            <tr>
              <th>Number</th>
              <th>Challenge Name</th>
              <th>Concepts</th>
              <th>Difficulty</th>
            </tr>
          </thead>
          <tbody>
            {challengesData.map((challenge) => (
              <tr
                key={challenge.id}
                className="challenge-row"
                tabIndex={0}
                role="link"
                aria-label={`Open ${challenge.id} challenge`}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                  }
                }}
              >
                <td>{challenge.id}</td>
                <td>
                  <Link to={`/challenges/${challenge.slug}`}>
                    {challenge.title}
                  </Link>
                </td>

                <td>{challenge.concepts}</td>
                <td>
                  <span
                    className={`difficulty-pill difficulty-pill--${challenge.difficulty.toLowerCase()}`}
                  >
                    {challenge.difficulty}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Home;
