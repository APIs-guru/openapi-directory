package shared

type Crop struct {
	Bottom *float32 `json:"bottom"`
	Left   *float32 `json:"left"`
	Right  *float32 `json:"right"`
	Top    *float32 `json:"top"`
}
