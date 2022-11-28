package shared

// Country
// Country
type Country struct {
	CountryCode *string           `json:"countryCode,omitempty"`
	Names       map[string]string `json:"names,omitempty"`
}
