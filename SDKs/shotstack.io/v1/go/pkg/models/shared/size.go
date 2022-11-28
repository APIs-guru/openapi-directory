package shared

// Size
// Set a custom size for a video or image. When using a custom size omit the `resolution` and `aspectRatio`. Custom sizes must be divisible by 2 based on the encoder specifications.
type Size struct {
	Height *int64 `json:"height,omitempty"`
	Width  *int64 `json:"width,omitempty"`
}
