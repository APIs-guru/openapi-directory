package shared

import (
"time")

type UserInfo struct {
    ColorIndex *int32 `json:"colorIndex,omitempty"`
    ContactAddresses []ContactAddressInfo `json:"contactAddresses,omitempty"`
    DutyInfo *UserDutyInfo `json:"dutyInfo,omitempty"`
    ID *string `json:"id,omitempty"`
    IsDeactivated *bool `json:"isDeactivated,omitempty"`
    IsInvite *bool `json:"isInvite,omitempty"`
    Mail *string `json:"mail,omitempty"`
    Name *string `json:"name,omitempty"`
    RoleID *string `json:"roleId,omitempty"`
    SubscriptionID *string `json:"subscriptionId,omitempty"`
    TimeZone *string `json:"timeZone,omitempty"`
    UserImageLastModified *time.Time `json:"userImageLastModified,omitempty"`
    
}

