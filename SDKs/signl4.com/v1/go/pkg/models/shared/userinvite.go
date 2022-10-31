package shared

type UserInvite struct {
	Email  *string `json:"email,omitempty"`
	RoleID *string `json:"roleId,omitempty"`
}
