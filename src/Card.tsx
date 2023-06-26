import './Card.css';

import { ReactNode } from 'react';

import logo from './logo384.png';

type Props = {
  children: ReactNode;
  label: string;
};

export default function Card({ children, label }: Props) {
  return (
    <div className="container">
      {children}
      <div className="suitTop">
        <div className="suitLabel">{label}</div>
        <img className="suitLogo" src={logo} />
      </div>
      <div className="suitBottom">
        <img className="suitLogo" src={logo} />
        <div className="suitLabel">{label}</div>
      </div>
    </div>
  );
}
