import React from 'react'
import { Word } from '../../../../types/word.type';
import ThreeDotMenu from './../../../assets/icons/icon-three-dots.svg';

interface Props {
  word: Word;
}

export default function ListItemComponent(props: Props) {
  return (
    <div className='list-item' key={props.word.id}>
      <div className="list-item__word">{props.word.word}</div>
      <div className="list-item__replacement">{props.word.replacement}</div>
      <div className="list-item__menu"><ThreeDotMenu /></div>
    </div>
  )
}
