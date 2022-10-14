package shared

type VideoAsset struct {
	Crop   *Crop    `json:"crop,omitempty"`
	Src    string   `json:"src"`
	Trim   *float64 `json:"trim,omitempty"`
	Type   string   `json:"type"`
	Volume *float64 `json:"volume,omitempty"`
}
