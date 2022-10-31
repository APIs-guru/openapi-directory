package shared

type PhotoTypeEnum string

const (
	PhotoTypeEnumPhoto PhotoTypeEnum = "photo"
)

type Photo struct {
	Height   *int64         `json:"height,omitempty"`
	MediaKey *string        `json:"media_key,omitempty"`
	Type     *PhotoTypeEnum `json:"type,omitempty"`
	URL      *string        `json:"url,omitempty"`
	Width    *int64         `json:"width,omitempty"`
}
