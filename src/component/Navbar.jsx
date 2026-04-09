import React from 'react'
import { useNavigate } from 'react-router-dom'
import StaggeredMenu from '../component/StaggeredMenu'

const Navbar = () => {
  const navigate = useNavigate()

  const menuItems = [
    {
      label: 'Home',
      ariaLabel: 'Go to home page',
      link: '/',
      onClick: () => navigate('/')
    },
    {
      label: 'About',
      ariaLabel: 'Learn more about me',
      link: '/about',
      onClick: () => navigate('/about')
    },
    {
      label: 'Projects',
      ariaLabel: 'View my projects',
      link: '/projects',
      onClick: () => navigate('/projects')
    }
  ]

  const socialItems = [
    { label: 'GitHub', link: 'https://github.com/yourusername' },
    { label: 'LinkedIn', link: 'https://linkedin.com/in/yourusername' },
    { label: 'Instagram', link: 'https://instagram.com/yourusername' }
  ]

  return (
    <>
      {/* NAV UI LAYER */}
      <div className="fixed inset-0 z-50 pointer-events-none ">
        {/* STAGGERED MENU */}
        <StaggeredMenu
          position="right"
          className={"mix-blend-soft-light"}
          items={menuItems}
          socialItems={socialItems}
          displaySocials
          displayItemNumbering
          isFixed

          colors={['#5B4CF2', '#A996F0']}
          accentColor="#A996F0"

          menuButtonColor="#ffffff"
          openMenuButtonColor="#ffffff"
          changeMenuColorOnOpen={false}

          onMenuOpen={() => {
            document.documentElement.style.overflow = 'hidden'
            document.body.style.overflow = 'hidden'
          }}
          onMenuClose={() => {
            document.documentElement.style.overflow = ''
            document.body.style.overflow = ''
          }}
        />
      </div>
    </>
  )
}

export default Navbar
