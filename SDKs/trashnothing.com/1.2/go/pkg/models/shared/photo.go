package shared

type PhotoImages struct {
	Height *int64  `json:"height"`
	URL    *string `json:"url"`
	Width  *int64  `json:"width"`
}

type Photo struct {
	Blurhash  *string       `json:"blurhash"`
	Images    []PhotoImages `json:"images"`
	PhotoID   *string       `json:"photo_id"`
	Thumbnail *string       `json:"thumbnail"`
	URL       *string       `json:"url"`
}
