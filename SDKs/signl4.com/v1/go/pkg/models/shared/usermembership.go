package shared

type UserMembershipInput struct {
	RoleID *string `json:"roleId,omitempty"`
	TeamID *string `json:"teamId,omitempty"`
}
