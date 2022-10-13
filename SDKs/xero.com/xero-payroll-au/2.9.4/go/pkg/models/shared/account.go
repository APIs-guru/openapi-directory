package shared

type Account struct {
	AccountID *string          `json:"AccountID"`
	Code      *string          `json:"Code"`
	Name      *string          `json:"Name"`
	Type      *AccountTypeEnum `json:"Type"`
}
