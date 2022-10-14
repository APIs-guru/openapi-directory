package shared

import (
	"time"
)

type PackageDto struct {
	AddOns                         []PackageItemDto `json:"addOns,omitempty"`
	AddonFee                       *float64         `json:"addonFee,omitempty"`
	ApplyForAllGyms                *bool            `json:"applyForAllGyms,omitempty"`
	AvailableGyms                  []GymDto         `json:"availableGyms,omitempty"`
	BindingPeriod                  *int32           `json:"bindingPeriod,omitempty"`
	CreatedDate                    *time.Time       `json:"createdDate,omitempty"`
	CreatedUser                    *string          `json:"createdUser,omitempty"`
	Description                    *string          `json:"description,omitempty"`
	EndDate                        *time.Time       `json:"endDate,omitempty"`
	ExpireInMonths                 *int32           `json:"expireInMonths,omitempty"`
	Features                       *string          `json:"features,omitempty"`
	FreeMonths                     *int32           `json:"freeMonths,omitempty"`
	InstructionsToGymUsers         *string          `json:"instructionsToGymUsers,omitempty"`
	InstructionsToWebUsers         *string          `json:"instructionsToWebUsers,omitempty"`
	IsActive                       *bool            `json:"isActive,omitempty"`
	IsAtg                          *bool            `json:"isAtg,omitempty"`
	IsAutoRenew                    *bool            `json:"isAutoRenew,omitempty"`
	IsFirstMonthFree               *bool            `json:"isFirstMonthFree,omitempty"`
	IsRegistrationFee              *bool            `json:"isRegistrationFee,omitempty"`
	IsRestAmount                   *bool            `json:"isRestAmount,omitempty"`
	IsShownInMobile                *bool            `json:"isShownInMobile,omitempty"`
	IsSponsorPackage               *bool            `json:"isSponsorPackage,omitempty"`
	MaximumGiveAwayRestAmount      *float64         `json:"maximumGiveAwayRestAmount,omitempty"`
	MemberCanAddAddOns             *bool            `json:"memberCanAddAddOns,omitempty"`
	MemberCanLeaveWithinFreePeriod *bool            `json:"memberCanLeaveWithinFreePeriod,omitempty"`
	MemberCanRemoveAddOns          *bool            `json:"memberCanRemoveAddOns,omitempty"`
	ModifiedDate                   *time.Time       `json:"modifiedDate,omitempty"`
	ModifiedUser                   *string          `json:"modifiedUser,omitempty"`
	MonthlyFee                     *float64         `json:"monthlyFee,omitempty"`
	NextPackageNumber              *int32           `json:"nextPackageNumber,omitempty"`
	NumberOfInstallments           *int32           `json:"numberOfInstallments,omitempty"`
	NumberOfVisits                 *int32           `json:"numberOfVisits,omitempty"`
	PackageID                      *int32           `json:"packageId,omitempty"`
	PackageName                    string           `json:"packageName"`
	PackageNumber                  *string          `json:"packageNumber,omitempty"`
	PackageType                    string           `json:"packageType"`
	PerVisitPrice                  *float64         `json:"perVisitPrice,omitempty"`
	RegistrationFee                float64          `json:"registrationFee"`
	ServiceFee                     float64          `json:"serviceFee"`
	ShownInWeb                     *bool            `json:"shownInWeb,omitempty"`
	StartDate                      *time.Time       `json:"startDate,omitempty"`
	Tags                           *string          `json:"tags,omitempty"`
	TotalPrice                     *float64         `json:"totalPrice,omitempty"`
}
