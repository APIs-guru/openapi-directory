package shared

type UsersInvitation struct {
	InviterID *string      `json:"inviterId"`
	Invites   []UserInvite `json:"invites"`
}
