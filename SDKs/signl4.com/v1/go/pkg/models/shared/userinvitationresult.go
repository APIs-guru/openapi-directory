package shared



type UserInvitationResult struct {
    ErrorCode *int32 `json:"errorCode,omitempty"`
    ErrorMessage *string `json:"errorMessage,omitempty"`
    InvitedUser *InvitedUserInfo `json:"invitedUser,omitempty"`
    Success *bool `json:"success,omitempty"`
    
}

