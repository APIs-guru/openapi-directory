package shared

type AudioAnalysisObject struct {
	Bars     []TimeIntervalObject `json:"bars"`
	Beats    []TimeIntervalObject `json:"beats"`
	Sections []SectionObject      `json:"sections"`
	Segments []SegmentObject      `json:"segments"`
	Tatums   []TimeIntervalObject `json:"tatums"`
}
