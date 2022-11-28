package shared

type CreatePayeesRequest2Input struct {
	Payees  []CreatePayee2Input `json:"payees"`
	PayorID string              `json:"payorId"`
}
