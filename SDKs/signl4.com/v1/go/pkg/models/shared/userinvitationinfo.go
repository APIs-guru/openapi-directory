package shared

type UserInvitationInfo struct {
	InviterID *string `json:"inviterId"`
	UserMail  *string `json:"userMail"`
}
