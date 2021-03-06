import React, { useEffect, useState, useRef } from 'react'
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'
import { FaHandsHelping } from 'react-icons/fa'

import styles from './work.module.scss'


const AccordionWork = () => {

 const [selectedWork, setSelectedWork] = useState(false)
 const [height, setHeight] = useState('');

 const refHeigth = useRef<HTMLDivElement>(null);
    
 useEffect(() => {
    return(
      setHeight(`${refHeigth.current?.scrollHeight}px`)
    )
 }, [])

 const handleClick = () => {
   setSelectedWork(!selectedWork)
 }

  return (
    <div className={styles.accordion}>
        <div className={styles.accordion__wrapper}>
            <div className={styles.title__wrapper} onClick={handleClick}>
                <div className={styles.title}>WORK EXPERIENCE</div>
                <div className={styles.plus}>{selectedWork ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />}</div>
            </div>

            <div               
              className={selectedWork ? styles.animated : styles.content}
              style={{minHeight: selectedWork ? `${height}` : "0px"}}
              ref={refHeigth}              
            >
              <div className={styles.icon}><FaHandsHelping /></div>
              <div className={styles.item}>
                 <div className={styles.item__institution}>Karavaeshnikov</div>
                 <div className={styles.item__descr}>Individual entrepreneur - Assistant manager</div>
                 <div className={styles.item__descr}>2018-2020</div>
              </div>
              <div className={styles.item}>
                 <div className={styles.item__institution}>ZapadKhimTorg</div>
                 <div className={styles.item__descr}>Private trading unitary enterprise - Driver</div>
                 <div className={styles.item__descr}>2020-2022</div>
               </div>
            </div>

        </div>    
    </div>
  )
}

export default AccordionWork