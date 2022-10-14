package shared

type AdditionalRate struct {
	ChangeReason  *string  `json:"changeReason,omitempty"`
	CostCenter1   *string  `json:"costCenter1,omitempty"`
	CostCenter2   *string  `json:"costCenter2,omitempty"`
	CostCenter3   *string  `json:"costCenter3,omitempty"`
	EffectiveDate *string  `json:"effectiveDate,omitempty"`
	EndCheckDate  *string  `json:"endCheckDate,omitempty"`
	Job           *string  `json:"job,omitempty"`
	Rate          *float64 `json:"rate,omitempty"`
	RateCode      *string  `json:"rateCode,omitempty"`
	RateNotes     *string  `json:"rateNotes,omitempty"`
	RatePer       *string  `json:"ratePer,omitempty"`
	Shift         *string  `json:"shift,omitempty"`
}
