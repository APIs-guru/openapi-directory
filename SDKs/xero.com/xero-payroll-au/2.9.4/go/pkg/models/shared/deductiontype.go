package shared

type DeductionTypeDeductionCategoryEnum string

const (
	DeductionTypeDeductionCategoryEnumNone            DeductionTypeDeductionCategoryEnum = "NONE"
	DeductionTypeDeductionCategoryEnumUnionfees       DeductionTypeDeductionCategoryEnum = "UNIONFEES"
	DeductionTypeDeductionCategoryEnumWorkplacegiving DeductionTypeDeductionCategoryEnum = "WORKPLACEGIVING"
)

type DeductionType struct {
	AccountCode       *string                             `json:"AccountCode"`
	CurrentRecord     *bool                               `json:"CurrentRecord"`
	DeductionCategory *DeductionTypeDeductionCategoryEnum `json:"DeductionCategory"`
	DeductionTypeID   *string                             `json:"DeductionTypeID"`
	IsExemptFromW1    *bool                               `json:"IsExemptFromW1"`
	Name              *string                             `json:"Name"`
	ReducesSuper      *bool                               `json:"ReducesSuper"`
	ReducesTax        *bool                               `json:"ReducesTax"`
	UpdatedDateUtc    *string                             `json:"UpdatedDateUTC"`
}
