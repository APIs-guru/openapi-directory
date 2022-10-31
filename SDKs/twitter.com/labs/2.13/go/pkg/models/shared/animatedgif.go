package shared




type AnimatedGifTypeEnum string

const (
    AnimatedGifTypeEnumAnimatedGif AnimatedGifTypeEnum = "animated_gif"
)


type AnimatedGif struct {
    Height *int64 `json:"height,omitempty"`
    MediaKey *string `json:"media_key,omitempty"`
    PreviewImageURL *string `json:"preview_image_url,omitempty"`
    Type *AnimatedGifTypeEnum `json:"type,omitempty"`
    Width *int64 `json:"width,omitempty"`
    
}

