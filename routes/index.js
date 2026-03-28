import Accommodation from "../components/Accommodation";
import Home from "../components/Home";
import Restaurants from "../components/Restaurants";
import Tours from "../components/Tours";

const routes = [
  {
    name: "Inicio",
    component: Home,
  },
  {
    name: "Restaurantes",
    component: Restaurants,
  },
  {
    name: "Hospedagens",
    component: Accommodation,
  },
  {
    name: "Passeios",
    component: Tours,
  },
];

export default routes;
