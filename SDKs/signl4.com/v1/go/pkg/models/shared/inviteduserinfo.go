package shared



type InvitedUserInfo struct {
    ID *string `json:"id,omitempty"`
    IsInvite *bool `json:"isInvite,omitempty"`
    Mail *string `json:"mail,omitempty"`
    Name *string `json:"name,omitempty"`
    RoleID *string `json:"roleId,omitempty"`
    
}

