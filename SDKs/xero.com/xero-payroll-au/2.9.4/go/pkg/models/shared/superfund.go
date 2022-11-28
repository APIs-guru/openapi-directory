package shared

type SuperFundInput struct {
	Abn                      *string           `json:"ABN,omitempty"`
	AccountName              *string           `json:"AccountName,omitempty"`
	AccountNumber            *string           `json:"AccountNumber,omitempty"`
	Bsb                      *string           `json:"BSB,omitempty"`
	ElectronicServiceAddress *string           `json:"ElectronicServiceAddress,omitempty"`
	EmployerNumber           *string           `json:"EmployerNumber,omitempty"`
	Name                     *string           `json:"Name,omitempty"`
	Spin                     *string           `json:"SPIN,omitempty"`
	SuperFundID              *string           `json:"SuperFundID,omitempty"`
	Type                     SuperFundTypeEnum `json:"Type"`
	Usi                      *string           `json:"USI,omitempty"`
	ValidationErrors         []ValidationError `json:"ValidationErrors,omitempty"`
}

type SuperFund struct {
	Abn                      *string           `json:"ABN,omitempty"`
	AccountName              *string           `json:"AccountName,omitempty"`
	AccountNumber            *string           `json:"AccountNumber,omitempty"`
	Bsb                      *string           `json:"BSB,omitempty"`
	ElectronicServiceAddress *string           `json:"ElectronicServiceAddress,omitempty"`
	EmployerNumber           *string           `json:"EmployerNumber,omitempty"`
	Name                     *string           `json:"Name,omitempty"`
	Spin                     *string           `json:"SPIN,omitempty"`
	SuperFundID              *string           `json:"SuperFundID,omitempty"`
	Type                     SuperFundTypeEnum `json:"Type"`
	Usi                      *string           `json:"USI,omitempty"`
	UpdatedDateUtc           *string           `json:"UpdatedDateUTC,omitempty"`
	ValidationErrors         []ValidationError `json:"ValidationErrors,omitempty"`
}
