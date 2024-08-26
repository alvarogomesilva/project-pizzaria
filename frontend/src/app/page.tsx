import Image from "next/image";
import styles from "./page.module.sass";
import Logo from '/public/logo.png'
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Image 
          src={Logo}
          alt="Logo da pizzaria"
          height={250}
        />

        <div className={styles.login}>
          <form>
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
