package shared

type UserDto struct {
	AccountNumber        *string `json:"accountNumber,omitempty"`
	ExternalEntityNumber *string `json:"externalEntityNumber,omitempty"`
	Guardian             *int32  `json:"guardian,omitempty"`
	GymNumber            *string `json:"gymNumber,omitempty"`
	IntroduceBy          *int32  `json:"introduceBy,omitempty"`
	Name                 *string `json:"name,omitempty"`
	Number               *string `json:"number,omitempty"`
	TypeID               *int32  `json:"typeId,omitempty"`
	UserID               *int32  `json:"userId,omitempty"`
}
