import { Add } from "./Add";
import { Card } from "./Card";
import { Header } from "../Header";
import "./styles.css";

const persons = [
  { id: 1, name: "Juliano Reis", employ: "Front-end Developer" },
  { id: 2, name: "Gabril do Couto", employ: "Front-end Developer" },
  { id: 3, name: "Eduardo Bittencourt", employ: "Front-end Developer" },
  { id: 4, name: "Gustavo Pinho", employ: "Technology Manager" },
];

export const Dashboard = () => {
  return (
    <div className="dashboard_container">
      <Header />
      <Add />
      <div className="dashboard_wrapper">
        {persons.map((el) => (
          <Card id={el.id} name={el.name} employ={el.employ} />
        ))}
      </div>
    </div>
  );
};
