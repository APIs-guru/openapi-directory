package shared

type PictureSizes struct {
	Height             float64 `json:"height"`
	Link               string  `json:"link"`
	LinkWithPlayButton *string `json:"link_with_play_button,omitempty"`
	Width              float64 `json:"width"`
}

type PictureTypeEnum string

const (
	PictureTypeEnumCaution PictureTypeEnum = "caution"
	PictureTypeEnumCustom  PictureTypeEnum = "custom"
	PictureTypeEnumDefault PictureTypeEnum = "default"
)

type Picture struct {
	Active      bool            `json:"active"`
	Link        *string         `json:"link,omitempty"`
	ResourceKey string          `json:"resource_key"`
	Sizes       []PictureSizes  `json:"sizes"`
	Type        PictureTypeEnum `json:"type"`
	URI         string          `json:"uri"`
}
