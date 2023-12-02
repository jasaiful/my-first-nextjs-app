import Image from "next/image";
import logo from "@/assets/logo.png/"

const AlbumPage = () => {
    return <div> 
        <h1>Using image component</h1>
        <Image 
        src="https://i.ibb.co/ZY65QSd/logo.png" 
        alt="project logo" 
        width={500}
        height={500}
        />

        <h1>Using local directory</h1>
        <Image 
        src={logo} 
        alt="project logo" 
        width={500}
        height={500}
        />

        <h1>Using img tag </h1>
        <img 
        src="https://i.ibb.co/ZY65QSd/logo.png" 
        alt="project logo" 
        width="500"
        height="500"
        />

    </div>;
};

export default AlbumPage;