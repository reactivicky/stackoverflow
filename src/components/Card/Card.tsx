import React, { useContext } from 'react'
import classes from './Card.module.css'
import { ListContext } from '../../ListContext'

interface CardProps {
  author: string,
  title: string,
  creationDate: string,
  link: string,
  body: string
}

const Card: React.FC<CardProps> = ({ author, title, creationDate, link, body }) => {
  const [, setState] = useContext(ListContext)

  const d = new Date(creationDate)


  const handleClick = () => {
    setState((prevState: any) => ({
      ...prevState, selectedCard: {
        author, title, d, link, body
      }, isOpen: true
    }))
  }

  return (
    <div className={classes.Card} onClick={handleClick}>
      <div className={classes.Card__authorDate}>
        <p className={classes.Card__author}>{author}</p>
        <p>{d.toUTCString()}</p>
      </div>
      <p className={classes.Card__title}>{title}</p>
    </div>
  )
}

export default Card
