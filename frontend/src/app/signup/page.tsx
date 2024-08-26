import styles from '../page.module.sass'
import Image from "next/image";
import Link from "next/link";
import Logo from '/public/logo.png'

export default function SignUp() {
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
          <form>
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