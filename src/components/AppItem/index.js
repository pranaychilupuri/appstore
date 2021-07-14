import './index.css'

const AppItem = props => {
  const {appData} = props
  const {appName, imageUrl} = appData

  return (
    <li className="app-list">
      <img src={imageUrl} className="app-image" alt={appName} />
      <p className="app-text">{appName}</p>
    </li>
  )
}

export default AppItem
