import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Feed from '../components/Feed'
import Sidenav from '../components/Sidenav'
import { useRecoilState } from "recoil";
import { sidenavState } from "../atom/sidenavAtom";

export default function Home() {

  const [sidenav , setSidenav] = useRecoilState(sidenavState);

  return (
    <div className={`bg-gray-50 h-screen  ${sidenav ? 'overflow-hidden' : 'overflow-y-scroll'}`}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/** sidebar menu */}
      <Sidenav />

      {/** Header */}
      <Header />

      

      {/** Feed */}
      <Feed />

    </div>
  )
}
