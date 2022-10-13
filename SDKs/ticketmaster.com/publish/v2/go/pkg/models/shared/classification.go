package shared

type Classification struct {
	Genre    *Level   `json:"genre"`
	Primary  *bool    `json:"primary"`
	Segment  *Segment `json:"segment"`
	SubGenre *Level   `json:"subGenre"`
	SubType  *Level   `json:"subType"`
	Type     *Level   `json:"type"`
}
