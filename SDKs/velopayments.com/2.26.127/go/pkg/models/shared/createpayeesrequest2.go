package shared



type CreatePayeesRequest2 struct {
    Payees []CreatePayee2 `json:"payees"`
    PayorID string `json:"payorId"`
    
}

