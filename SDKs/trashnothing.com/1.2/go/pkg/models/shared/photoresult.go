package shared

// PhotoResultThumbnail
// Photo thumbnail data.
type PhotoResultThumbnail struct {
	Height *int64  `json:"height,omitempty"`
	URL    *string `json:"url,omitempty"`
	Width  *int64  `json:"width,omitempty"`
}

// PhotoResult
// The result of uploading or editing a photo.
type PhotoResult struct {
	PhotoID   *string               `json:"photo_id,omitempty"`
	Thumbnail *PhotoResultThumbnail `json:"thumbnail,omitempty"`
}
