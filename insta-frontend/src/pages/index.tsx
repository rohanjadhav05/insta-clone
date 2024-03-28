import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import LoginCard from "@/components/Card";
import useMediaQuery from '@mui/material/useMediaQuery';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const isLargeScreen = useMediaQuery('(min-width:768px)');

  return (
    <div id="index" style={{display:"flex", justifyContent:"center", paddingTop:'100px'}}>
       {
        isLargeScreen && (
          <div style={{ flex: "1", maxWidth: "50%", display: 'flex', justifyContent: 'flex-end'}}>
            <Image
              src="/home.jpeg"
              alt="example"
              width={400} 
              height={530}
            />
          </div>
      )}
      <div style={{ flex: "1", maxWidth: "50%", display: 'flex', justifyContent: 'flex-start' }}> {/* Adjust the width as needed */}
        <LoginCard />
      </div>
    </div>
  );
}
