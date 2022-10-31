package shared

type Crop struct {
	Bottom *float32 `json:"bottom,omitempty"`
	Left   *float32 `json:"left,omitempty"`
	Right  *float32 `json:"right,omitempty"`
	Top    *float32 `json:"top,omitempty"`
}
