package shared

import (
	"time"
)

type PackageDto struct {
	AddOns                         []PackageItemDto `json:"addOns"`
	AddonFee                       *float64         `json:"addonFee"`
	ApplyForAllGyms                *bool            `json:"applyForAllGyms"`
	AvailableGyms                  []GymDto         `json:"availableGyms"`
	BindingPeriod                  *int32           `json:"bindingPeriod"`
	CreatedDate                    *time.Time       `json:"createdDate"`
	CreatedUser                    *string          `json:"createdUser"`
	Description                    *string          `json:"description"`
	EndDate                        *time.Time       `json:"endDate"`
	ExpireInMonths                 *int32           `json:"expireInMonths"`
	Features                       *string          `json:"features"`
	FreeMonths                     *int32           `json:"freeMonths"`
	InstructionsToGymUsers         *string          `json:"instructionsToGymUsers"`
	InstructionsToWebUsers         *string          `json:"instructionsToWebUsers"`
	IsActive                       *bool            `json:"isActive"`
	IsAtg                          *bool            `json:"isAtg"`
	IsAutoRenew                    *bool            `json:"isAutoRenew"`
	IsFirstMonthFree               *bool            `json:"isFirstMonthFree"`
	IsRegistrationFee              *bool            `json:"isRegistrationFee"`
	IsRestAmount                   *bool            `json:"isRestAmount"`
	IsShownInMobile                *bool            `json:"isShownInMobile"`
	IsSponsorPackage               *bool            `json:"isSponsorPackage"`
	MaximumGiveAwayRestAmount      *float64         `json:"maximumGiveAwayRestAmount"`
	MemberCanAddAddOns             *bool            `json:"memberCanAddAddOns"`
	MemberCanLeaveWithinFreePeriod *bool            `json:"memberCanLeaveWithinFreePeriod"`
	MemberCanRemoveAddOns          *bool            `json:"memberCanRemoveAddOns"`
	ModifiedDate                   *time.Time       `json:"modifiedDate"`
	ModifiedUser                   *string          `json:"modifiedUser"`
	MonthlyFee                     *float64         `json:"monthlyFee"`
	NextPackageNumber              *int32           `json:"nextPackageNumber"`
	NumberOfInstallments           *int32           `json:"numberOfInstallments"`
	NumberOfVisits                 *int32           `json:"numberOfVisits"`
	PackageID                      *int32           `json:"packageId"`
	PackageName                    string           `json:"packageName"`
	PackageNumber                  *string          `json:"packageNumber"`
	PackageType                    string           `json:"packageType"`
	PerVisitPrice                  *float64         `json:"perVisitPrice"`
	RegistrationFee                float64          `json:"registrationFee"`
	ServiceFee                     float64          `json:"serviceFee"`
	ShownInWeb                     *bool            `json:"shownInWeb"`
	StartDate                      *time.Time       `json:"startDate"`
	Tags                           *string          `json:"tags"`
	TotalPrice                     *float64         `json:"totalPrice"`
}
