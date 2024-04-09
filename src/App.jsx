import { Header } from "./components/Header"
import { Post } from './Post'
import "./global.css"
import styles from './App.module.css'
import { Sidebar } from "./components/Sidebar"

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="Lucas Ezidro" content="Primeiro post" />
          <Post author="Alice Ezidro" content="Segundo Post" />
        </main>
      </div>
    </div>
  )
}
