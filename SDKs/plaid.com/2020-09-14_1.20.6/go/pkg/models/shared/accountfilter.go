package shared



type AccountFilter struct {
    Credit []string `json:"credit,omitempty"`
    Depository []string `json:"depository,omitempty"`
    Investment []string `json:"investment,omitempty"`
    Loan []string `json:"loan,omitempty"`
    
}

