import Image from "next/image";
const AboutPage = () => {
  return (
    <div>
      <h1>AboutPage</h1>
      <Image
        src="https://images.unsplash.com/photo-1770037367722-5444567fcb52"
        alt="ProfilePic"
        width={400} 
        height={500}
      ></Image>
    </div>
  );
};
export default AboutPage;
