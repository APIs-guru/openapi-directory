package shared

type VenueGeneralInfo struct {
	ChildRules   map[string]string `json:"childRules"`
	GeneralRules map[string]string `json:"generalRules"`
}
