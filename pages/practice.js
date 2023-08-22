import Image from "next/image";
import Layout from "../components/layout";

export default function Practice() {
  const photos = [
    {
      id: 1,
      name: "/images/flowers.jpg",
      description: "watercolor wildflowers",
      width: "600",
      height: "400",
    },
    {
      id: 2,
      name: "/images/wildflowers.jpeg",
      description: "watercolor wildflowers",
      width: "600",
      height: "400",
    },
  ];

  const gallery = photos.map((photo) => (
    <li key={photo.id}>
      <Image
        src={photo.name}
        alt={photo.description}
        width={photo.width}
        height={photo.height}
      />
    </li>
  ));

  return (
    <Layout>
      <ul>{gallery}</ul>
    </Layout>
  );
}
