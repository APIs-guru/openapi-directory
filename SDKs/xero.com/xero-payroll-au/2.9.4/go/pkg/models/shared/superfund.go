package shared

type SuperFund struct {
	Abn                      *string           `json:"ABN"`
	AccountName              *string           `json:"AccountName"`
	AccountNumber            *string           `json:"AccountNumber"`
	Bsb                      *string           `json:"BSB"`
	ElectronicServiceAddress *string           `json:"ElectronicServiceAddress"`
	EmployerNumber           *string           `json:"EmployerNumber"`
	Name                     *string           `json:"Name"`
	Spin                     *string           `json:"SPIN"`
	SuperFundID              *string           `json:"SuperFundID"`
	Type                     SuperFundTypeEnum `json:"Type"`
	Usi                      *string           `json:"USI"`
	UpdatedDateUtc           *string           `json:"UpdatedDateUTC"`
	ValidationErrors         []ValidationError `json:"ValidationErrors"`
}
