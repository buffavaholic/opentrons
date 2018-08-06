// @flow
import {connect} from 'react-redux'
import * as React from 'react'
import type {BaseState, ThunkDispatch} from '../../../types'

import {
  actions as steplistActions,
  selectors as steplistSelectors,
  type TerminalItemId
} from '../../../steplist'

import {PDTitledList} from '../../lists'

type Props = React.ElementProps<typeof PDTitledList>

type OP = {
  id: TerminalItemId,
  title: string,
  children?: React.Node
}

type SP = {
  hovered: $ElementType<Props, 'hovered'>,
  selected: $ElementType<Props, 'selected'>
}

function mapStateToProps (state: BaseState, ownProps: OP): SP {
  const {id} = ownProps
  const hovered = steplistSelectors.getHoveredTerminalItemId(state) === id
  const selected = steplistSelectors.getSelectedTerminalItemId(state) === id
  return {
    hovered,
    selected
  }
}

// TODO Ian: 2018-07-31 annotate type of mergeProps correctly. Related to https://github.com/flow-typed/flow-typed/issues/1269 ?
function mergeProps (stateProps: SP, dispatchProps: {dispatch: ThunkDispatch<*>}, ownProps: OP): * {
  const {id, title, children} = ownProps
  const {dispatch} = dispatchProps
  return {
    ...stateProps,
    title,
    children,
    onClick: () => dispatch(steplistActions.selectTerminalItem(id)),
    onMouseEnter: () => dispatch(steplistActions.hoverOnTerminalItem(id)),
    onMouseLeave: () => dispatch(steplistActions.hoverOnTerminalItem(null))
  }
}

export default connect(mapStateToProps, null, mergeProps)(PDTitledList)
