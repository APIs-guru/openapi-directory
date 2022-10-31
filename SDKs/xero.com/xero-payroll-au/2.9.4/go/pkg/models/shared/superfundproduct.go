package shared

type SuperFundProduct struct {
	Abn         *string `json:"ABN,omitempty"`
	ProductName *string `json:"ProductName,omitempty"`
	Spin        *string `json:"SPIN,omitempty"`
	Usi         *string `json:"USI,omitempty"`
}
