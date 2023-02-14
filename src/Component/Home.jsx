import React from 'react'
import { Topslider } from './Topslider';
import { Portfolio_Slider } from './Portfolio_Slider';
import { Solution } from './Solution';
import { CompanyFact } from './CompanyFact';
import { Coreb } from './Coreb';
import { Videos } from './Videos';
import { TitleChange } from './Titlechange/TitleChange';

export const Home = () => {
  TitleChange('Socus Home Page')
  return (
    <>
          <Topslider/>
          <Portfolio_Slider/>
          <Solution/>
          <CompanyFact/>
          <Coreb/>
          <Videos/>
    </>
  )
}
