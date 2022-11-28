package shared

// SegmentObject

// https://developer.spotify.com/documentation/web-api/reference/tracks/get-audio-analysis/#segment-object - Find more info on the official Spotify Web API Reference
type SegmentObject struct {
	Confidence      *float64  `json:"confidence,omitempty"`
	Duration        *float64  `json:"duration,omitempty"`
	LoudnessEnd     *float64  `json:"loudness_end,omitempty"`
	LoudnessMax     *float64  `json:"loudness_max,omitempty"`
	LoudnessMaxTime *float64  `json:"loudness_max_time,omitempty"`
	LoudnessStart   *float64  `json:"loudness_start,omitempty"`
	Pitches         []float64 `json:"pitches,omitempty"`
	Start           *float64  `json:"start,omitempty"`
	Timbre          []float64 `json:"timbre,omitempty"`
}
