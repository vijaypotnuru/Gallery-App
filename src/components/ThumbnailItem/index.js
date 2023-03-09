import './index.css'

const ThumbnailItem = props => {
  const {thumbnailDetails, updateThumbnail, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = thumbnailDetails
  const thumbnailClassName = isActive ? 'thumbnail active' : 'thumbnail'
  const onClickImage = () => {
    updateThumbnail(id)
  }

  return (
    <li className="thumbnail-list-item">
      <button type="button" className="thumbnail-button" onClick={onClickImage}>
        <img
          className={thumbnailClassName}
          src={thumbnailUrl}
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
