package shared

import (
	"time"
)

type PackageSearchDto struct {
	ActiveStatus          *bool      `json:"activeStatus,omitempty"`
	AddonFee              *float64   `json:"addonFee,omitempty"`
	ApplyForAllGyms       *bool      `json:"applyForAllGyms,omitempty"`
	BindingPeriod         *int32     `json:"bindingPeriod,omitempty"`
	CreatedDate           *time.Time `json:"createdDate,omitempty"`
	CreatedUser           *string    `json:"createdUser,omitempty"`
	Description           *string    `json:"description,omitempty"`
	Features              *string    `json:"features,omitempty"`
	FreeMonths            *int32     `json:"freeMonths,omitempty"`
	MemberCanRemoveAddOns *bool      `json:"memberCanRemoveAddOns,omitempty"`
	ModifiedDate          *time.Time `json:"modifiedDate,omitempty"`
	ModifiedUser          *string    `json:"modifiedUser,omitempty"`
	MonthlyFee            *float64   `json:"monthlyFee,omitempty"`
	NumberOfVisits        *int32     `json:"numberOfVisits,omitempty"`
	PackageID             *int32     `json:"packageId,omitempty"`
	PackageName           *string    `json:"packageName,omitempty"`
	PackageNumber         *int32     `json:"packageNumber,omitempty"`
	PackageType           *string    `json:"packageType,omitempty"`
	RegistrationFee       *float64   `json:"registrationFee,omitempty"`
	ServiceFee            *float64   `json:"serviceFee,omitempty"`
	Tags                  *string    `json:"tags,omitempty"`
	TotalCount            *int32     `json:"totalCount,omitempty"`
	TotalPrice            *float64   `json:"totalPrice,omitempty"`
}
