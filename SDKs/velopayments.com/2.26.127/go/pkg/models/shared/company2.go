package shared

type Company2 struct {
	Name          string  `json:"name"`
	OperatingName *string `json:"operatingName,omitempty"`
	TaxID         *string `json:"taxId,omitempty"`
}
