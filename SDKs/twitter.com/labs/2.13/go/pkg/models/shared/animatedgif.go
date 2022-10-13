package shared

type AnimatedGifTypeEnum string

const (
	AnimatedGifTypeEnumAnimatedGif AnimatedGifTypeEnum = "animated_gif"
)

type AnimatedGif struct {
	Height          *int64               `json:"height"`
	MediaKey        *string              `json:"media_key"`
	PreviewImageURL *string              `json:"preview_image_url"`
	Type            *AnimatedGifTypeEnum `json:"type"`
	Width           *int64               `json:"width"`
}
