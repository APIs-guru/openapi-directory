package shared

// VideoAsset
// The VideoAsset is used to create video sequences from video files. The src must be a publicly accessible URL to a video resource such as an mp4 file.
type VideoAsset struct {
	Crop   *Crop    `json:"crop,omitempty"`
	Src    string   `json:"src"`
	Trim   *float64 `json:"trim,omitempty"`
	Type   string   `json:"type"`
	Volume *float64 `json:"volume,omitempty"`
}
