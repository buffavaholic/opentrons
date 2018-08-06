// @flow
import * as React from 'react'
import cx from 'classnames'
import styles from './styles.css'

type Props = {
  className?: ?string,
  /** show light gray border between list items */
  border?: ?boolean,
  /** hover style when hovered (for redux-linked hover state, do not use this) */
  hoverable?: ?boolean
}

/** Light wrapper around li for PD-specific styles */
export default function PDListItem (props: Props) {
  const {className, border, hoverable, ...passThruProps} = props
  const _className = cx(
    {
      [styles.border]: props.border,
      [styles.hoverable]: props.hoverable
    },
    styles.pd_list_item,
    props.className
  )
  return <li {...passThruProps} className={_className} />
}
