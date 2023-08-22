import Image from "next/image";
import Layout from "../components/layout";

export default function Gallery() {
  const photos = [
    {
      id: 1,
      name: "/images/207A3346.jpg",
      description: "couple on the beach",
      width: "600",
      height: "900",
    },
    {
      id: 2,
      name: "/images/207A2826.jpg",
      description: "picnic on the beach",
      width: "600",
      height: "900",
    },
    {
      id: 3,
      name: "/images/207A6379.jpg",
      description: "couple in the studio",
      width: "600",
      height: "900",
    },
  ];

  const gallery = photos.map((photo) => (
    <li id={photo.id}>
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
