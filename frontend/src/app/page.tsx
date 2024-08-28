import Image from "next/image";
import styles from "./page.module.sass";
import Logo from '/public/logo.png'
import Link from "next/link";
import { api } from "@/services/api";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default function Home() {
  async function handleLogin(formData: FormData) {
    "use server"

    const email = formData.get("email")
    const password = formData.get("password")

    try {
      const response = await api.post('/login', {email, password})
     
      if (!response.data.token) {
        return;
      }

      const expressTime = 60 * 60 * 24 * 30 * 1000
      cookies().set("@u", response.data.token, {
        maxAge: expressTime,
        path: "/",
        httpOnly: false,
        secure: process.env.NODE_ENV === "production"
      }) 

    } catch (error) {
      console.log(error)
    }

    redirect("/dashboard")
  }

  return (
    <>
      <div className={styles.container}>
        <Image 
          src={Logo}
          alt="Logo da pizzaria"
          height={250}
        />

        <div className={styles.login}>
          <form action={handleLogin}>
            <input type="text" 
              name="email"
              placeholder="Digite seu email"
              className={styles.input}
              required
            />
            <input type="password" 
              name="password"
              placeholder="Digite sua senha"
              className={styles.input}
              required
            />

            <button type="submit" className={styles.button}>Acessar</button>
          </form>

          <Link href="/signup" className={styles.link}>Não possui conta? Cadastre-se.</Link>
        </div>
      </div>
    </>
  );
}
