package shared

// TimeIntervalObject

// https://developer.spotify.com/documentation/web-api/reference/tracks/get-audio-analysis/#time-interval-object - Find more info on the official Spotify Web API Reference
type TimeIntervalObject struct {
	Confidence *float64 `json:"confidence,omitempty"`
	Duration   *float64 `json:"duration,omitempty"`
	Start      *float64 `json:"start,omitempty"`
}
