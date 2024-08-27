import styles from '../page.module.sass'
import Image from "next/image";
import Link from "next/link";
import Logo from '/public/logo.png'
import { api } from '@/services/api';
import { redirect } from 'next/navigation';

export default function SignUp() {

    async function handleRegister(formData: FormData) {
      "use server"

      const name = formData.get("name")
      const email = formData.get("email")
      const password = formData.get("password")

      if (!name || !email || !password) return

      try {
        await api.post("/users", {name, email, password})
        
      } catch (error) {
        console.log(error)
      }

      redirect("/")
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
        <h2>Crie sua conta</h2>
          <form action={handleRegister}>
            <input type="text" 
              name="name"
              placeholder="Digite seu Nome"
              className={styles.input}
              required
            />
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

            <button type="submit" className={styles.button}>Cadastrar</button>
          </form>

          <Link href="/" className={styles.link}>Já possui conta? Login.</Link>
        </div>
      </div>
        </>
    )
}