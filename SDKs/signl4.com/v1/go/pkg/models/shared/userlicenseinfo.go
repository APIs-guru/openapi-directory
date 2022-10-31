package shared



type UserLicenseInfo struct {
    CurrentUsers *int32 `json:"currentUsers,omitempty"`
    IsFree *bool `json:"isFree,omitempty"`
    IsTrial *bool `json:"isTrial,omitempty"`
    LicensedUsers *int32 `json:"licensedUsers,omitempty"`
    PlanCode *string `json:"planCode,omitempty"`
    
}

