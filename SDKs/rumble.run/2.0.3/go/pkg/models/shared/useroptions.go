package shared

type UserOptions struct {
	ClientAdmin    *bool                  `json:"client_admin"`
	Email          *string                `json:"email"`
	FirstName      *string                `json:"first_name"`
	LastName       *string                `json:"last_name"`
	OrgDefaultRole *string                `json:"org_default_role"`
	OrgRoles       map[string]interface{} `json:"org_roles"`
}
