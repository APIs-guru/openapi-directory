package shared



type User struct {
    ClientAdmin *bool `json:"client_admin,omitempty"`
    ClientID *string `json:"client_id,omitempty"`
    CreatedAt *int64 `json:"created_at,omitempty"`
    Email *string `json:"email,omitempty"`
    FirstName *string `json:"first_name,omitempty"`
    ID string `json:"id"`
    InviteTokenExpiration *int64 `json:"invite_token_expiration,omitempty"`
    LastLoginAt *int64 `json:"last_login_at,omitempty"`
    LastLoginIP *string `json:"last_login_ip,omitempty"`
    LastLoginUa *string `json:"last_login_ua,omitempty"`
    LastName *string `json:"last_name,omitempty"`
    LoginFailures *int64 `json:"login_failures,omitempty"`
    OrgDefaultRole *string `json:"org_default_role,omitempty"`
    OrgRoles map[string]interface{} `json:"org_roles,omitempty"`
    ResetTokenExpiration *int64 `json:"reset_token_expiration,omitempty"`
    SsoOnly *bool `json:"sso_only,omitempty"`
    UpdatedAt *int64 `json:"updated_at,omitempty"`
    
}

