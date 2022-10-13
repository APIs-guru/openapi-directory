package shared

type UserLicenseInfo struct {
	CurrentUsers  *int32  `json:"currentUsers"`
	IsFree        *bool   `json:"isFree"`
	IsTrial       *bool   `json:"isTrial"`
	LicensedUsers *int32  `json:"licensedUsers"`
	PlanCode      *string `json:"planCode"`
}
