package shared

type VideoAsset struct {
	Crop   *Crop    `json:"crop"`
	Src    string   `json:"src"`
	Trim   *float64 `json:"trim"`
	Type   string   `json:"type"`
	Volume *float64 `json:"volume"`
}
