package shared

// GymDto
// The GymDTO Class.
// Contains relevant fields of Gym DTO by masking actual Gym entity's fields in application.
type GymDto struct {
	ExternalGymNumber *int32  `json:"externalGymNumber,omitempty"`
	GymID             *int32  `json:"gymId,omitempty"`
	GymName           *string `json:"gymName,omitempty"`
	Location          *string `json:"location,omitempty"`
}
