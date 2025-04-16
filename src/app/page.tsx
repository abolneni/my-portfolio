import Layout from '@/components/Layout'; // Using @ for absolute path from src/
import Hero from '@/components/Hero';
import Links from '@/components/Links'; // Import the new Links component
import About from '@/components/About'; // Import the new About component
import Projects from '@/components/Projects'; // Import the new Projects component

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Links /> {/* Add the Links component here */}
      <About /> {/* Add the About component here */}
      <Projects /> {/* Add the Projects component here */}
      {/* Other sections will be added here */}
    </Layout>
  );
}
