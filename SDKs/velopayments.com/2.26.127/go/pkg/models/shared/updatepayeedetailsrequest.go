package shared

type UpdatePayeeDetailsRequest struct {
	Address    *PayeeAddress  `json:"address"`
	Challenge  *Challenge     `json:"challenge"`
	Company    *Company       `json:"company"`
	Email      *string        `json:"email"`
	Individual *Individual    `json:"individual"`
	Language   *string        `json:"language"`
	PayeeType  *PayeeTypeEnum `json:"payeeType"`
}
