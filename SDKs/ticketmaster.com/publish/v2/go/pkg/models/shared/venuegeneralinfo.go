package shared

// VenueGeneralInfo
// Venue general information
type VenueGeneralInfo struct {
	ChildRules   map[string]string `json:"childRules,omitempty"`
	GeneralRules map[string]string `json:"generalRules,omitempty"`
}
