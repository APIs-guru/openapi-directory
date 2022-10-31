package shared



type PhotoResultThumbnail struct {
    Height *int64 `json:"height,omitempty"`
    URL *string `json:"url,omitempty"`
    Width *int64 `json:"width,omitempty"`
    
}

type PhotoResult struct {
    PhotoID *string `json:"photo_id,omitempty"`
    Thumbnail *PhotoResultThumbnail `json:"thumbnail,omitempty"`
    
}

