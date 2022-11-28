package shared

// Poster
// Generate a poster image for the video at a specific point from the timeline. The poster image size will match the size of the output video.
type Poster struct {
	Capture float64 `json:"capture"`
}
