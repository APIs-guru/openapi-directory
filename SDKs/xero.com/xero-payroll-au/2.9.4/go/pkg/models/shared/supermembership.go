package shared

type SuperMembership struct {
	EmployeeNumber    string  `json:"EmployeeNumber"`
	SuperFundID       string  `json:"SuperFundID"`
	SuperMembershipID *string `json:"SuperMembershipID,omitempty"`
}
