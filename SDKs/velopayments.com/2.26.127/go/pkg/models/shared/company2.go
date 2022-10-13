package shared

type Company2 struct {
	Name          string  `json:"name"`
	OperatingName *string `json:"operatingName"`
	TaxID         *string `json:"taxId"`
}
