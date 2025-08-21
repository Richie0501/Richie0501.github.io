// src/pages/Home.js
import { Container } from 'react-bootstrap';
import Banner from './common/Banner';
import Specialization from './common/specialCard';
import PlantCarousel from './common/plantCard';

export default function Home() {
  return (
    <Container className="mb-3">
      <Banner />
      <Specialization />
      <PlantCarousel />
    </Container>
  );
}
