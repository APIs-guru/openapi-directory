package shared

type AdditionalRate struct {
	ChangeReason  *string  `json:"changeReason"`
	CostCenter1   *string  `json:"costCenter1"`
	CostCenter2   *string  `json:"costCenter2"`
	CostCenter3   *string  `json:"costCenter3"`
	EffectiveDate *string  `json:"effectiveDate"`
	EndCheckDate  *string  `json:"endCheckDate"`
	Job           *string  `json:"job"`
	Rate          *float64 `json:"rate"`
	RateCode      *string  `json:"rateCode"`
	RateNotes     *string  `json:"rateNotes"`
	RatePer       *string  `json:"ratePer"`
	Shift         *string  `json:"shift"`
}
