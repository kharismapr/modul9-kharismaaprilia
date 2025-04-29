import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Navbar.jsx'
import Component from './Component.jsx';
import Counter from './Counter.jsx'

export default function App() {
  return (
    <div>
      <Navbar />
      <Component />
      <Counter />
    </div>
  );
}
