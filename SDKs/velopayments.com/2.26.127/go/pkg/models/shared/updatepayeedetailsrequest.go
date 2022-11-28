package shared

type UpdatePayeeDetailsRequestInput struct {
	Address    *PayeeAddress    `json:"address,omitempty"`
	Challenge  *Challenge       `json:"challenge,omitempty"`
	Company    *Company         `json:"company,omitempty"`
	Email      *string          `json:"email,omitempty"`
	Individual *IndividualInput `json:"individual,omitempty"`
	Language   *string          `json:"language,omitempty"`
	PayeeType  *PayeeTypeEnum   `json:"payeeType,omitempty"`
}
