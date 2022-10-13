package shared

type UserInviteOptions struct {
	ClientAdmin    *bool                  `json:"client_admin"`
	Email          *string                `json:"email"`
	FirstName      *string                `json:"first_name"`
	LastName       *string                `json:"last_name"`
	Message        *string                `json:"message"`
	OrgDefaultRole *string                `json:"org_default_role"`
	OrgRoles       map[string]interface{} `json:"org_roles"`
	Subject        *string                `json:"subject"`
}
