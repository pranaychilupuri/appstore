import './index.css'

const TabItem = props => {
  const {tabData, onClickTabButton, isActive} = props
  const {tabId, displayText} = tabData
  const onClickTabItem = () => {
    onClickTabButton(tabId)
  }

  const activeBtnClassName = isActive ? 'tab-switch active' : 'tab-switch'

  return (
    <li className="tab-list">
      <button
        className={activeBtnClassName}
        type="button"
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
