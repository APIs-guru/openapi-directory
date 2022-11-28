package shared

// GroupConfiguration
// The deserialized form of the <b>Energy Footprint Update</b> service's request payload.
type GroupConfiguration struct {
	Co2Emission     *float64 `json:"co2Emission,omitempty"`
	EnergyCost      *float64 `json:"energyCost,omitempty"`
	GroupNameFilter *string  `json:"groupNameFilter,omitempty"`
}
