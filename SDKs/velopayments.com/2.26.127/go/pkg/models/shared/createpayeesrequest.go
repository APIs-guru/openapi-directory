package shared

type CreatePayeesRequest struct {
	Payees  []CreatePayee `json:"payees"`
	PayorID string        `json:"payorId"`
}
