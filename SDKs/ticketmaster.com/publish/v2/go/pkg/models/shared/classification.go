package shared

type Classification struct {
	Genre    *Level   `json:"genre,omitempty"`
	Primary  *bool    `json:"primary,omitempty"`
	Segment  *Segment `json:"segment,omitempty"`
	SubGenre *Level   `json:"subGenre,omitempty"`
	SubType  *Level   `json:"subType,omitempty"`
	Type     *Level   `json:"type,omitempty"`
}
