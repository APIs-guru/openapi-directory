package shared

type TflAPIPresentationEntitiesTrainLoading struct {
	Direction         *string `json:"direction"`
	Line              *string `json:"line"`
	LineDirection     *string `json:"lineDirection"`
	NaptanTo          *string `json:"naptanTo"`
	PlatformDirection *string `json:"platformDirection"`
	TimeSlice         *string `json:"timeSlice"`
	Value             *int32  `json:"value"`
}
