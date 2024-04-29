import ProjectCard from "@/components/Homepage/projectCard/ProjectCard";
import Section from "@/components/UI/Section";

export const metadata = {
  title: "Prem Sagar | Full Stack Developer",
  description:
    "I am a Full Stack Developer with 3 years of experience in building web applications using React(NextJS), Node.js, and MongoDB.",
};

export default function Home() {
  return (
    <main className="">
      <h1>Prem Sagar</h1>
      <h2>Full Stack Developer</h2>
      <p>
        I am a Full Stack Developer with 3 years of experience in building web
        applications using React(NextJS), Node.js, and MongoDB.
      </p>

      <Section>
        <h2>Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-10 md:gap-15 ">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </Section>
      <section>
        <h2>Contact</h2>
        <p>Email: psagar172@gmail.com</p>
        <p>Phone: +91 9113413883</p>
      </section>
    </main>
  );
}
