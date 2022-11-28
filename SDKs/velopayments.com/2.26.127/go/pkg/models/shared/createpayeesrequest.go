package shared

type CreatePayeesRequestInput struct {
	Payees  []CreatePayeeInput `json:"payees"`
	PayorID string             `json:"payorId"`
}
