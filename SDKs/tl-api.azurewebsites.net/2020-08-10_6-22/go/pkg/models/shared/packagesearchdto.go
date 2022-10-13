package shared

import (
	"time"
)

type PackageSearchDto struct {
	ActiveStatus          *bool      `json:"activeStatus"`
	AddonFee              *float64   `json:"addonFee"`
	ApplyForAllGyms       *bool      `json:"applyForAllGyms"`
	BindingPeriod         *int32     `json:"bindingPeriod"`
	CreatedDate           *time.Time `json:"createdDate"`
	CreatedUser           *string    `json:"createdUser"`
	Description           *string    `json:"description"`
	Features              *string    `json:"features"`
	FreeMonths            *int32     `json:"freeMonths"`
	MemberCanRemoveAddOns *bool      `json:"memberCanRemoveAddOns"`
	ModifiedDate          *time.Time `json:"modifiedDate"`
	ModifiedUser          *string    `json:"modifiedUser"`
	MonthlyFee            *float64   `json:"monthlyFee"`
	NumberOfVisits        *int32     `json:"numberOfVisits"`
	PackageID             *int32     `json:"packageId"`
	PackageName           *string    `json:"packageName"`
	PackageNumber         *int32     `json:"packageNumber"`
	PackageType           *string    `json:"packageType"`
	RegistrationFee       *float64   `json:"registrationFee"`
	ServiceFee            *float64   `json:"serviceFee"`
	Tags                  *string    `json:"tags"`
	TotalCount            *int32     `json:"totalCount"`
	TotalPrice            *float64   `json:"totalPrice"`
}
