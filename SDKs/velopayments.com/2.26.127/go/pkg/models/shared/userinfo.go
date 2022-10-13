package shared

type UserInfo struct {
	MfaDetails *MfaDetails    `json:"mfa_details"`
	UserType   *UserType2Enum `json:"userType"`
	UserID     *string        `json:"user_id"`
}
