package shared

import (
	"time"
)

type UserInfo struct {
	ColorIndex            *int32               `json:"colorIndex"`
	ContactAddresses      []ContactAddressInfo `json:"contactAddresses"`
	DutyInfo              *UserDutyInfo        `json:"dutyInfo"`
	ID                    *string              `json:"id"`
	IsDeactivated         *bool                `json:"isDeactivated"`
	IsInvite              *bool                `json:"isInvite"`
	Mail                  *string              `json:"mail"`
	Name                  *string              `json:"name"`
	RoleID                *string              `json:"roleId"`
	SubscriptionID        *string              `json:"subscriptionId"`
	TimeZone              *string              `json:"timeZone"`
	UserImageLastModified *time.Time           `json:"userImageLastModified"`
}
