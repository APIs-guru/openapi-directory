package shared

// Timeline
// A timeline represents the contents of a video edit over time, an audio edit over time, in seconds, or an image layout. A timeline consists of layers called tracks. Tracks are composed of titles, images, audio, html or video segments referred to as clips which are placed along the track at specific starting point and lasting for a specific amount of time.
type Timeline struct {
	Background *string     `json:"background,omitempty"`
	Cache      *bool       `json:"cache,omitempty"`
	Fonts      []Font      `json:"fonts,omitempty"`
	Soundtrack *Soundtrack `json:"soundtrack,omitempty"`
	Tracks     []Track     `json:"tracks"`
}
