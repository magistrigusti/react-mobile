import './Actions.scss'
import { Block } from "../Block/Block";

export const Actions = () => {

  return (
    <div className="Actions">
      <Block className="action" >
        <i className="ic-copy" />
        <span>COPY CARD NUMBER</span>
      </Block>
      <Block className="action" >
        <i className="ic-show" />
        <span>SHOW CVV</span>
      </Block>
    </div>
  )
}
