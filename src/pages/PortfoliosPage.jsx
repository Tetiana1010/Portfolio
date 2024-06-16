import React, { Fragment, useState } from "react";
import { InnerLayout, MainLayout } from "../styled/Layouts.js";
import portfolios from '../data/portfolios.js';
import Menu from "../components/Menu.jsx";
import Button from '../components/Button.jsx';
import Title from "../components/Title.jsx";

const allButtons = ['All', ...new Set(portfolios.map(item => item.category))];

const PortfolioPage = () => {
  const [menuItem, setMenuItems] = useState(portfolios);
  const [button] = useState(allButtons);

  const filter = (button) => {
    if(button === 'All'){
      setMenuItems(portfolios);
      return;
    }
    const filteredData = portfolios.filter(item => item.category === button);
    setMenuItems(filteredData);
  };

  return <Fragment>
      <MainLayout>
        <Title title="Portfolios" span="Portfolios"></Title>
        <InnerLayout>
          <Button filter={filter} button={button}/>
          <Menu menuItem={menuItem}></Menu> 
        </InnerLayout>
      </MainLayout>
  </Fragment>
};

export default PortfolioPage;
