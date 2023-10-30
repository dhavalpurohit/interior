'use client';
import { useState } from 'react';
import Landing from './Landing'
import Header from './header'
import SideMenu from './side-menu'
import './page.scss'


export default function Home() {
  const [isMenuOpen, setMenuOpen] = useState(true);
  const toggleClass = () => {
    setMenuOpen(!isMenuOpen);
  }

  return (
    <main>
      <aside className={isMenuOpen ? 'aside-open' : 'aside-close'}>
        <SideMenu />
      </aside>
      <div className='right-content'>
        <Header />
        <Landing />
        {!isMenuOpen &&
          <div className="menu-toggle" onClick={toggleClass}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        }
      </div>
    </main >
  )
}
