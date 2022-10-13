package shared

type GroupConfiguration struct {
	Co2Emission     *float64 `json:"co2Emission"`
	EnergyCost      *float64 `json:"energyCost"`
	GroupNameFilter *string  `json:"groupNameFilter"`
}
