package shared

import (
	"time"
)

type HolidaySchemeHolidaySchemeAccrualPayCodesAccrualPayCodes struct {
	PayCode []string `json:"PayCode,omitempty"`
}

type HolidaySchemeHolidaySchemeHolidayScheme struct {
	AccrualPayCodes        *HolidaySchemeHolidaySchemeAccrualPayCodesAccrualPayCodes `json:"AccrualPayCodes,omitempty"`
	AllowNegativeBalance   *bool                                                     `json:"AllowNegativeBalance,omitempty"`
	AnnualEntitlementWeeks *float64                                                  `json:"AnnualEntitlementWeeks,omitempty"`
	BankHolidayInclusive   *bool                                                     `json:"BankHolidayInclusive,omitempty"`
	Code                   *string                                                   `json:"Code,omitempty"`
	EffectiveDate          *time.Time                                                `json:"EffectiveDate,omitempty"`
	MaxCarryOverDays       *float64                                                  `json:"MaxCarryOverDays,omitempty"`
	Revision               *int32                                                    `json:"Revision,omitempty"`
	SchemeCeasedDate       *time.Time                                                `json:"SchemeCeasedDate,omitempty"`
	SchemeKey              *string                                                   `json:"SchemeKey,omitempty"`
	SchemeName             *string                                                   `json:"SchemeName,omitempty"`
	YearStartDay           *int32                                                    `json:"YearStartDay,omitempty"`
	YearStartMonth         *int32                                                    `json:"YearStartMonth,omitempty"`
}

type HolidayScheme struct {
	HolidayScheme *HolidaySchemeHolidaySchemeHolidayScheme `json:"HolidayScheme,omitempty"`
}
