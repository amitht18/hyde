import React from 'react';
import Add from './../../assets/icons/icon-header-add.svg';
import Trash from './../../assets/icons/icon-trash.svg';
import Smiley from './../../assets/icons/icon-smile.svg';
import './button.scss';

type Icontype = 'trash' | 'add' | 'smiley';
type ButtonType = 'icon' | 'text';

interface Props {
  type: ButtonType;
  Icon?: Icontype;
  label: string;
  classes?: string;
}

function getIcon(iconType: Icontype | undefined) {
  switch (iconType) {
    case ('trash'): {
      return <Trash />
    }
    case ('add'): {
      return <Add />
    }
    case ('smiley'): {
      return <Smiley />
    }
    default: {
      return null;
    }
  }
}

export default function ButtonComponent(props: Props) {
  return (
    <button className={`${props.type} ${props.classes} button`}>
      {getIcon(props.Icon)}
      <span>{props.label}</span>
    </button>
  )
}
