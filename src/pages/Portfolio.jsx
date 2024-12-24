import React from 'react';
import PortfolioItem from '../components/PorfolioItem';
import '/src/Portfolio.css';

function AboutMe() {
  return (
    <section>
      <h2>Portfolio</h2>
      <div>
        <PortfolioItem title = {'LovelyLoots'} github = {'https://github.com/Weyweyx/LovelyLoots'} app = {'https://lovelyloots-ti34.onrender.com/'} src = {'https://github.com/Weyweyx/LovelyLoots/raw/main/client/src/assets/images/Screenshot.png'}>

        </PortfolioItem>
        <PortfolioItem title = {'Social Network'} github = {'https://github.com/Weyweyx/Social-NetworkAPI'} app = {''} src = {'public/images/diesel.jpeg'}>

        </PortfolioItem>
        <PortfolioItem title = {'Movie Tracker'} github = {'https://github.com/Weyweyx/MovieTracker'} app = {''} src = {'public/images/diesel.jpeg'}>

        </PortfolioItem>
        <PortfolioItem title = {'WeatherBuddy'} github = {'https://github.com/Weyweyx/WeatherBuddy'} app = {'https://weyweyx.github.io/WeatherBuddy/'} src = {'public/images/diesel.jpeg'}>

        </PortfolioItem>
        <PortfolioItem title = {'Employee Tracker'} github = {'https://github.com/Weyweyx/Employee-Tracker'} app = {''} src = {'public/images/diesel.jpeg'}>

        </PortfolioItem>
        <PortfolioItem title = {'Logo Maker'} github = {'https://github.com/Weyweyx/SVG-Logo-Maker'} app = {''} src = {'public/images/diesel.jpeg'}>

        </PortfolioItem>
      </div>
    </section>
  );
}

export default AboutMe;