package shared



type User struct {
    ContactNumbers []Contact `json:"contact_numbers,omitempty"`
    Email *string `json:"email,omitempty"`
    Extensions []UserExtension `json:"extensions,omitempty"`
    FirstName *string `json:"first_name,omitempty"`
    ID *float64 `json:"id,omitempty"`
    LastName *string `json:"last_name,omitempty"`
    LoginName *string `json:"login_name,omitempty"`
    
}

