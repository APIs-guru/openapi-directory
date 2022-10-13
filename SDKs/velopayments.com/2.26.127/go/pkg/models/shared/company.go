package shared

type Company struct {
	Name          string  `json:"name"`
	OperatingName *string `json:"operatingName"`
	TaxID         *string `json:"taxId"`
}
