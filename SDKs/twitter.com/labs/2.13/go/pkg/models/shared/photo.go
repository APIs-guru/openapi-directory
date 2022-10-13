package shared

type PhotoTypeEnum string

const (
	PhotoTypeEnumPhoto PhotoTypeEnum = "photo"
)

type Photo struct {
	Height   *int64         `json:"height"`
	MediaKey *string        `json:"media_key"`
	Type     *PhotoTypeEnum `json:"type"`
	URL      *string        `json:"url"`
	Width    *int64         `json:"width"`
}
