package shared

type PlayProgressiveTypeEnum string

const (
	PlayProgressiveTypeEnumSource    PlayProgressiveTypeEnum = "source"
	PlayProgressiveTypeEnumVideoMp4  PlayProgressiveTypeEnum = "video/mp4"
	PlayProgressiveTypeEnumVideoWebm PlayProgressiveTypeEnum = "video/webm"
	PlayProgressiveTypeEnumVp6XVideo PlayProgressiveTypeEnum = "vp6/x-video"
)

type PlayProgressive struct {
	CreatedTime        string                  `json:"created_time"`
	Fps                float64                 `json:"fps"`
	Height             float64                 `json:"height"`
	Link               string                  `json:"link"`
	LinkExpirationTime string                  `json:"link_expiration_time"`
	Log                map[string]interface{}  `json:"log"`
	Md5                string                  `json:"md5"`
	Size               float64                 `json:"size"`
	Type               PlayProgressiveTypeEnum `json:"type"`
	Width              float64                 `json:"width"`
}

type PlayStatusEnum string

const (
	PlayStatusEnumPlayable         PlayStatusEnum = "playable"
	PlayStatusEnumPurchaseRequired PlayStatusEnum = "purchase_required"
	PlayStatusEnumRestricted       PlayStatusEnum = "restricted"
	PlayStatusEnumUnavailable      PlayStatusEnum = "unavailable"
)

type Play struct {
	Progressive []PlayProgressive `json:"progressive"`
	Status      PlayStatusEnum    `json:"status"`
}
