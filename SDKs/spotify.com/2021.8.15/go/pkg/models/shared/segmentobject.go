package shared

type SegmentObject struct {
	Confidence      *float64  `json:"confidence"`
	Duration        *float64  `json:"duration"`
	LoudnessEnd     *float64  `json:"loudness_end"`
	LoudnessMax     *float64  `json:"loudness_max"`
	LoudnessMaxTime *float64  `json:"loudness_max_time"`
	LoudnessStart   *float64  `json:"loudness_start"`
	Pitches         []float64 `json:"pitches"`
	Start           *float64  `json:"start"`
	Timbre          []float64 `json:"timbre"`
}
