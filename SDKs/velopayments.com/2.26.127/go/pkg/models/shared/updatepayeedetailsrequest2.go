package shared

type UpdatePayeeDetailsRequest2Input struct {
	Address    *PayeeAddress2    `json:"address,omitempty"`
	Challenge  *Challenge2       `json:"challenge,omitempty"`
	Company    *Company2         `json:"company,omitempty"`
	Email      *string           `json:"email,omitempty"`
	Individual *Individual2Input `json:"individual,omitempty"`
	Language   *string           `json:"language,omitempty"`
	PayeeType  *PayeeTypeEnum    `json:"payeeType,omitempty"`
}
