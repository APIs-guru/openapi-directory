package shared

type GymDto struct {
	ExternalGymNumber *int32  `json:"externalGymNumber"`
	GymID             *int32  `json:"gymId"`
	GymName           *string `json:"gymName"`
	Location          *string `json:"location"`
}
