package shared

type GymDto struct {
	ExternalGymNumber *int32  `json:"externalGymNumber,omitempty"`
	GymID             *int32  `json:"gymId,omitempty"`
	GymName           *string `json:"gymName,omitempty"`
	Location          *string `json:"location,omitempty"`
}
