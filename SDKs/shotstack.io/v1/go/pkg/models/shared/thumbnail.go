package shared

// Thumbnail
// Generate a thumbnail image for the video or image at a specific point from the timeline.
type Thumbnail struct {
	Capture float64 `json:"capture"`
	Scale   float64 `json:"scale"`
}
