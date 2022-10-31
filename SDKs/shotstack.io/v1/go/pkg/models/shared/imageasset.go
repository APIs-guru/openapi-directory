package shared

type ImageAsset struct {
	Crop *Crop  `json:"crop,omitempty"`
	Src  string `json:"src"`
	Type string `json:"type"`
}
