import Image from 'next/image'
import styles from './page.module.css'
import UserList from './UserList'
import user from './svg/kullanici.png'
import 'primeicons/primeicons.css';
import cart from './svg/marketcart.png'
export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div className={styles.topNav}>
          
        <span className="pi pi-user" id='img1' style={{ fontSize: '2rem', marginLeft: '1700px',marginTop:'30px' }}></span>
        <span className="pi pi-shopping-cart" id='img2' style={{fontSize:'2rem',marginLeft:'40px',marginTop:'30px'}}></span>
        </div>
        <div className={styles.li2}>
        <div className={styles.filter}>
 <h1 className={styles.filterB} >Filter</h1>
 <h2 className={styles.h1}> <input
        type="checkbox"
        id={styles.myCheckbox}
       
      /> kitap
</h2>
<h2 className={styles.h1}> <input
        type="checkbox"
        id={styles.myCheckbox}
       
      />elektronik 
</h2>
<h2 className={styles.h1}> <input
        type="checkbox"
        id={styles.myCheckbox}
       
      />giyim 
</h2>
        </div>

       <UserList />
        



      </div>
      </div>
    </main>
  )
}
