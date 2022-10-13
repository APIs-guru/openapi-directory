package shared

type UserMembership struct {
	IsValid *bool   `json:"isValid"`
	RoleID  *string `json:"roleId"`
	TeamID  *string `json:"teamId"`
}
