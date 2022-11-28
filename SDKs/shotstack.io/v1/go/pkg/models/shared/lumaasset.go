package shared

// LumaAsset
// The LumaAsset is used to create luma matte masks, transitions and effects between other assets. A luma matte is a grey scale image or animated video where the black areas are transparent and the white areas solid. The luma matte animation should be provided as an mp4 video file. The src must be a publicly accessible URL to the file.
type LumaAsset struct {
	Src  string   `json:"src"`
	Trim *float64 `json:"trim,omitempty"`
	Type string   `json:"type"`
}
