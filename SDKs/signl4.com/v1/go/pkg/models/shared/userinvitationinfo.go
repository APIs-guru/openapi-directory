package shared



type UserInvitationInfo struct {
    InviterID *string `json:"inviterId,omitempty"`
    UserMail *string `json:"userMail,omitempty"`
    
}

