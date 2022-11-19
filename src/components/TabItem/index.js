import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTabId} = props
  const {displayText, tabId} = tabDetails

  const onclickTabItem = () => {
    updateActiveTabId(tabId)
  }

  return (
    <li className="tab-item-container ">
      <button type="button" className="tab-btn" onClick={onclickTabItem}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
