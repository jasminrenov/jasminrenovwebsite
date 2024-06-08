import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import React from 'react'

const AccordianFaq = ({className,heading,paragraph}) => {
  return (
    <div>
        <Accordion  className={` h-fit radius-10 mb-15   ${className}`}>
    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" expandIcon={<ExpandMoreIcon />}>
      <Typography className="poppins font-20-res-16 weight-500 ">{heading}</Typography>
    </AccordionSummary>
    <AccordionDetails className=" p-20">
      
        {paragraph}
    </AccordionDetails>
  </Accordion>
  </div>
  )
}

export default AccordianFaq