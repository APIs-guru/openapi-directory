package shared

type V3VehicleDescriptor struct {
	AirConditioned *bool   `json:"air_conditioned"`
	Description    *string `json:"description"`
	ID             *string `json:"id"`
	Length         *string `json:"length"`
	LowFloor       *bool   `json:"low_floor"`
	Operator       *string `json:"operator"`
	Supplier       *string `json:"supplier"`
}
