package shared

type UserInvitationResult struct {
	ErrorCode    *int32           `json:"errorCode"`
	ErrorMessage *string          `json:"errorMessage"`
	InvitedUser  *InvitedUserInfo `json:"invitedUser"`
	Success      *bool            `json:"success"`
}
