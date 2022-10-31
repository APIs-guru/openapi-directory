package shared

type Account struct {
	AccountID *string          `json:"AccountID,omitempty"`
	Code      *string          `json:"Code,omitempty"`
	Name      *string          `json:"Name,omitempty"`
	Type      *AccountTypeEnum `json:"Type,omitempty"`
}
