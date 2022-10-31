package shared



type UsersInvitation struct {
    InviterID *string `json:"inviterId,omitempty"`
    Invites []UserInvite `json:"invites,omitempty"`
    
}

