package shared

import (
	"time"
)

type HolidaySchemeHolidaySchemeAccrualPayCodesAccrualPayCodes struct {
	PayCode []string `json:"PayCode"`
}

type HolidaySchemeHolidaySchemeHolidayScheme struct {
	AccrualPayCodes        *HolidaySchemeHolidaySchemeAccrualPayCodesAccrualPayCodes `json:"AccrualPayCodes"`
	AllowNegativeBalance   *bool                                                     `json:"AllowNegativeBalance"`
	AnnualEntitlementWeeks *float64                                                  `json:"AnnualEntitlementWeeks"`
	BankHolidayInclusive   *bool                                                     `json:"BankHolidayInclusive"`
	Code                   *string                                                   `json:"Code"`
	EffectiveDate          *time.Time                                                `json:"EffectiveDate"`
	MaxCarryOverDays       *float64                                                  `json:"MaxCarryOverDays"`
	Revision               *int32                                                    `json:"Revision"`
	SchemeCeasedDate       *time.Time                                                `json:"SchemeCeasedDate"`
	SchemeKey              *string                                                   `json:"SchemeKey"`
	SchemeName             *string                                                   `json:"SchemeName"`
	YearStartDay           *int32                                                    `json:"YearStartDay"`
	YearStartMonth         *int32                                                    `json:"YearStartMonth"`
}

type HolidayScheme struct {
	HolidayScheme *HolidaySchemeHolidaySchemeHolidayScheme `json:"HolidayScheme"`
}
