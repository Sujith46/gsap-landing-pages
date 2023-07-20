import { Space_Grotesk } from "next/font/google";
import Image from "next/image";

const space_grotesk = Space_Grotesk({ weight: ["400"], subsets: ["latin"] });
const space_grotesk_bold = Space_Grotesk({
  weight: ["700"],
  subsets: ["latin"],
});

export const Card = ({ image, heading, description }) => {
  return (
    <div className="card mb-16">
      {image ? (
        <Image src={image} alt="car-image" width={700} height={700} />
      ) : null}
      <h1 className={`${space_grotesk_bold.className} text-5xl mt-6 mb-4`}>
        {heading}
      </h1>
      <h2 className={`${space_grotesk.className} text-gray-400`}>
        {description}
      </h2>
    </div>
  );
};
