import { Html, Head, Main, NextScript } from "next/document";
import {CenterCard} from './components/CenterCard'
import Home from "./home";

export default function Document() {
  return (
    <div>
      <Home/>
    </div>
  );
}