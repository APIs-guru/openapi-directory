package shared

// AudioAnalysisObject

// https://developer.spotify.com/documentation/web-api/reference/tracks/get-audio-analysis/#audio-analysis-object - Find more info on the official Spotify Web API Reference
type AudioAnalysisObject struct {
	Bars     []TimeIntervalObject `json:"bars,omitempty"`
	Beats    []TimeIntervalObject `json:"beats,omitempty"`
	Sections []SectionObject      `json:"sections,omitempty"`
	Segments []SegmentObject      `json:"segments,omitempty"`
	Tatums   []TimeIntervalObject `json:"tatums,omitempty"`
}
