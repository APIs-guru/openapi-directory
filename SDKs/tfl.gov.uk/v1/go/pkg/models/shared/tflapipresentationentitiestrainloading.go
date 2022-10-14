package shared

type TflAPIPresentationEntitiesTrainLoading struct {
	Direction         *string `json:"direction,omitempty"`
	Line              *string `json:"line,omitempty"`
	LineDirection     *string `json:"lineDirection,omitempty"`
	NaptanTo          *string `json:"naptanTo,omitempty"`
	PlatformDirection *string `json:"platformDirection,omitempty"`
	TimeSlice         *string `json:"timeSlice,omitempty"`
	Value             *int32  `json:"value,omitempty"`
}
