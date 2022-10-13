package shared

type ImageAsset struct {
	Crop *Crop  `json:"crop"`
	Src  string `json:"src"`
	Type string `json:"type"`
}
