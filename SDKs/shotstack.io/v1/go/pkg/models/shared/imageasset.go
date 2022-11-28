package shared

// ImageAsset
// The ImageAsset is used to create video from images to compose an image. The src must be a publicly accessible URL to an image resource such as a jpg or png file.
type ImageAsset struct {
	Crop *Crop  `json:"crop,omitempty"`
	Src  string `json:"src"`
	Type string `json:"type"`
}
