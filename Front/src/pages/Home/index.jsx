import React, { useState, useEffect } from 'react';
import List from '../../components/List';
import Header from '../../components/Header';
import { Page } from "./style";


export default function Home() {

  const [data, setData] = useState("")


  return (
    <>
      <Header />
      <Page>
        <List />
      </Page>
    </>
  )
}
