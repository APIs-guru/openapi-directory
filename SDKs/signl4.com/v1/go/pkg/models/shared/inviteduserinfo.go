package shared

type InvitedUserInfo struct {
	ID       *string `json:"id"`
	IsInvite *bool   `json:"isInvite"`
	Mail     *string `json:"mail"`
	Name     *string `json:"name"`
	RoleID   *string `json:"roleId"`
}
