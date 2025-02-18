import { Add } from "./Add"
import { Card } from "./Card"
import { Header } from "../Header"
import "./styles.css";


export const Dashboard = () => {
  return (
    <div className="dashboard_container">
      <Header />
      <Add />
      <div className="dashboard_wrapper">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      </div>      
    </div>
  )
}