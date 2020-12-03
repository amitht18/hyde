import React, { Fragment } from 'react'
import './toast.scss';

export type ToastType = 'success' | 'danger'

interface Props {
  type: ToastType,
  message: string;
  visible: boolean;
}

export default function ToastNotificationComponent(props: Props) {
  return (
    <Fragment>
      {props.visible &&
        <div className={`${props.type} toast`}>
          <span>{props.message}</span>
        </div>
      }
    </Fragment>
  )
}
