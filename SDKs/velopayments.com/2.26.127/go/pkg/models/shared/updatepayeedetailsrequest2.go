package shared

type UpdatePayeeDetailsRequest2 struct {
	Address    *PayeeAddress2 `json:"address"`
	Challenge  *Challenge2    `json:"challenge"`
	Company    *Company2      `json:"company"`
	Email      *string        `json:"email"`
	Individual *Individual2   `json:"individual"`
	Language   *string        `json:"language"`
	PayeeType  *PayeeTypeEnum `json:"payeeType"`
}
