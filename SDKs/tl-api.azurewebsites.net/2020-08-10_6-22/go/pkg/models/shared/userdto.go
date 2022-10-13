package shared

type UserDto struct {
	AccountNumber        *string `json:"accountNumber"`
	ExternalEntityNumber *string `json:"externalEntityNumber"`
	Guardian             *int32  `json:"guardian"`
	GymNumber            *string `json:"gymNumber"`
	IntroduceBy          *int32  `json:"introduceBy"`
	Name                 *string `json:"name"`
	Number               *string `json:"number"`
	TypeID               *int32  `json:"typeId"`
	UserID               *int32  `json:"userId"`
}
