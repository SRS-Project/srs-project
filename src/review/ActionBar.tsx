import * as React from 'react'
import { ReviewState } from 'src/review/Review'
import { ViewState } from 'src/cards/CardRenderer'

export interface ActionBarProps {
  reviewState: ReviewState
}

export class ActionBar extends React.Component<ActionBarProps, {}> {
  renderFrontActions = () => {
    return 'reveal card'
  }

  renderBackActions = () => {
    return 'action buttons when card is revealed'
  }

  render() {
    switch (this.props.reviewState.viewState) {
      case ViewState.Front:
        return this.renderFrontActions()
      case ViewState.Back:
        return this.renderBackActions()
    }
  }
}
