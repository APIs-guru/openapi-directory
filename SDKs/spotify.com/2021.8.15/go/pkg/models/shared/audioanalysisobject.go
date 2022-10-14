package shared

type AudioAnalysisObject struct {
	Bars     []TimeIntervalObject `json:"bars,omitempty"`
	Beats    []TimeIntervalObject `json:"beats,omitempty"`
	Sections []SectionObject      `json:"sections,omitempty"`
	Segments []SegmentObject      `json:"segments,omitempty"`
	Tatums   []TimeIntervalObject `json:"tatums,omitempty"`
}
