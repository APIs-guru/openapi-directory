package shared

type PhotoResultThumbnail struct {
	Height *int64  `json:"height"`
	URL    *string `json:"url"`
	Width  *int64  `json:"width"`
}

type PhotoResult struct {
	PhotoID   *string               `json:"photo_id"`
	Thumbnail *PhotoResultThumbnail `json:"thumbnail"`
}
