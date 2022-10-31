package shared




type DeductionTypeDeductionCategoryEnum string

const (
    DeductionTypeDeductionCategoryEnumNone DeductionTypeDeductionCategoryEnum = "NONE"
DeductionTypeDeductionCategoryEnumUnionfees DeductionTypeDeductionCategoryEnum = "UNIONFEES"
DeductionTypeDeductionCategoryEnumWorkplacegiving DeductionTypeDeductionCategoryEnum = "WORKPLACEGIVING"
)


type DeductionType struct {
    AccountCode *string `json:"AccountCode,omitempty"`
    CurrentRecord *bool `json:"CurrentRecord,omitempty"`
    DeductionCategory *DeductionTypeDeductionCategoryEnum `json:"DeductionCategory,omitempty"`
    DeductionTypeID *string `json:"DeductionTypeID,omitempty"`
    IsExemptFromW1 *bool `json:"IsExemptFromW1,omitempty"`
    Name *string `json:"Name,omitempty"`
    ReducesSuper *bool `json:"ReducesSuper,omitempty"`
    ReducesTax *bool `json:"ReducesTax,omitempty"`
    UpdatedDateUtc *string `json:"UpdatedDateUTC,omitempty"`
    
}

