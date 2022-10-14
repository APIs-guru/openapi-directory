package shared

type UserMembership struct {
	IsValid *bool   `json:"isValid,omitempty"`
	RoleID  *string `json:"roleId,omitempty"`
	TeamID  *string `json:"teamId,omitempty"`
}
