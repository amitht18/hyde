import React, { Fragment, useState, useEffect } from 'react'
import ListItemComponent from './list-item.component'
import './list.scss'
import { useWord, useFilterStateContext } from '../../../state/state';

export default function ListWordsComponent() {
  const words = useWord();
  const [localWords, setLocalWords] = useState(words)
  const {searchString} = useFilterStateContext();
  useEffect(() => {
    const filteredList = words.filter((word) => {
      return word.word.toLowerCase().includes(searchString.toLowerCase())
    });
    setLocalWords(filteredList);
  }, [searchString, words])

  return (
    <Fragment>
      <div className="list-container__header">
        <div className="list-container__header-text">Word</div>
        <div className="list-container__header-text">Replacement</div>
      </div>
      <div className='list-container'>
        {
          localWords.map((word) => {
            return <ListItemComponent word={word} />
          })
        }
      </div>
    </Fragment>
  )
}
