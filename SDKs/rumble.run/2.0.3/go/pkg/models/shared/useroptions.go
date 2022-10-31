package shared



type UserOptions struct {
    ClientAdmin *bool `json:"client_admin,omitempty"`
    Email *string `json:"email,omitempty"`
    FirstName *string `json:"first_name,omitempty"`
    LastName *string `json:"last_name,omitempty"`
    OrgDefaultRole *string `json:"org_default_role,omitempty"`
    OrgRoles map[string]interface{} `json:"org_roles,omitempty"`
    
}

