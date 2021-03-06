import Link from "next/link";
import { useSession, signOut } from "next-auth/client";

import styles from "./styles.module.scss";

function MainNavigation() {
  const [session, loading] = useSession();

  function handleLogout() {
    signOut();
  }

  return (
    <header className={styles.header}>
      <Link href="/">
        <a>
          <div className={styles.logo}>Next Auth</div>
        </a>
      </Link>
      <nav>
        <ul>
          {!session && !loading && (
            <li>
              <Link href="/auth">Login</Link>
            </li>
          )}
          {session && (
            <>
              <li>
                <Link href="/profile">Profile</Link>
              </li>
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
