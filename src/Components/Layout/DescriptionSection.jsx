
import React from 'react'
import { useData } from '../../hooks/useData'
import { useLanguage } from '../../hooks/useLanguage'
import Description from './../Description'
import Subtitle from './../Subtitle'

function DescriptionSection() {
  const {projectData} = useData()
  const { language } = useLanguage();

  const text =
    language === "es"
      ? projectData.description.es
      : projectData.description.en;
  return (
   <>
     <Subtitle text={"Descripción"}/>
     <Description text={text}/>
   
   </>
  )
}

export default DescriptionSection