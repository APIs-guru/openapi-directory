package shared



type PhotoImages struct {
    Height *int64 `json:"height,omitempty"`
    URL *string `json:"url,omitempty"`
    Width *int64 `json:"width,omitempty"`
    
}

type Photo struct {
    Blurhash *string `json:"blurhash,omitempty"`
    Images []PhotoImages `json:"images,omitempty"`
    PhotoID *string `json:"photo_id,omitempty"`
    Thumbnail *string `json:"thumbnail,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

