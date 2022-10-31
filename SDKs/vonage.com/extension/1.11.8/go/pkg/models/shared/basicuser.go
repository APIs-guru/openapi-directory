package shared



type BasicUser struct {
    Email *string `json:"email,omitempty"`
    FirstName *string `json:"first_name,omitempty"`
    LastName *string `json:"last_name,omitempty"`
    LoginName *string `json:"login_name,omitempty"`
    
}

