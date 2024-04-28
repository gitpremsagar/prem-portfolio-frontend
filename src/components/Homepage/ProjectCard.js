import Image from "next/image";
import React from "react";

export default function ProjectCard() {
  return (
    <article className="border border-gray-200 hover:shadow-2xl md:hover:scale-110 transition ease-in-out duration-500">
      <div>
        <Image
          src="https://via.placeholder.com/500x400"
          alt="Project 1"
          width={500}
          height={300}
          layout="responsive"
        />
      </div>
      <div className="p-8">
        <h3>Project 1</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          doloremque, quae, quia quidem, nesciunt autem quod quos dolorum
          voluptatum quibusdam doloribus. Quam, quae. Quisquam, quae.
        </p>
      </div>
    </article>
  );
}
