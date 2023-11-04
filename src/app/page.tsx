'use client';
import { useState } from 'react';
import Landing from './Landing';
import Header from './header';
import './page.scss';
import './responsive.scss';
import SideMenu from './side-menu';

export default function Home() {
  const [isMenuOpen, setMenuOpen] = useState(true)
  const toggleClass = () => {
    setMenuOpen(!isMenuOpen)
  }
  return (
    <main>
      <aside className={isMenuOpen ? 'aside-close' : 'aside-open'}>
        <div className='close-btn' onClick={toggleClass}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m7 7l10 10M7 17L17 7" /></svg>
        </div>
        <SideMenu />
      </aside>
      <div className='right-content'>
        <Header ontoggleClass={toggleClass} />
        <Landing />
      </div>
    </main >
  )
}
