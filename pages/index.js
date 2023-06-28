import MeetupList from "../components/meetups/MeetupList";

const dummy = [
  {
    id: "1",
    title: "1st",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg",
    address: "Paris",
  },
  {
    id: "m2",
    title: "2s meetupt",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg",
    address: "Pari ke ghar",
  },
];

function Homepage() {
  return <MeetupList meetups={dummy} />;
}

export default Homepage;
