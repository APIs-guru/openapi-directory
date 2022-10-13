package shared

type AccountFilter struct {
	Credit     []string `json:"credit"`
	Depository []string `json:"depository"`
	Investment []string `json:"investment"`
	Loan       []string `json:"loan"`
}
