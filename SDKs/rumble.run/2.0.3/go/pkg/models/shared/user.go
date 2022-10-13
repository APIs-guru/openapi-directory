package shared

type User struct {
	ClientAdmin           *bool                  `json:"client_admin"`
	ClientID              *string                `json:"client_id"`
	CreatedAt             *int64                 `json:"created_at"`
	Email                 *string                `json:"email"`
	FirstName             *string                `json:"first_name"`
	ID                    string                 `json:"id"`
	InviteTokenExpiration *int64                 `json:"invite_token_expiration"`
	LastLoginAt           *int64                 `json:"last_login_at"`
	LastLoginIP           *string                `json:"last_login_ip"`
	LastLoginUa           *string                `json:"last_login_ua"`
	LastName              *string                `json:"last_name"`
	LoginFailures         *int64                 `json:"login_failures"`
	OrgDefaultRole        *string                `json:"org_default_role"`
	OrgRoles              map[string]interface{} `json:"org_roles"`
	ResetTokenExpiration  *int64                 `json:"reset_token_expiration"`
	SsoOnly               *bool                  `json:"sso_only"`
	UpdatedAt             *int64                 `json:"updated_at"`
}
