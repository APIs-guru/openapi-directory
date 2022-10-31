package shared



type V1Employee struct {
    AuthorizedLocationIds []string `json:"authorized_location_ids,omitempty"`
    CreatedAt *string `json:"created_at,omitempty"`
    Email *string `json:"email,omitempty"`
    ExternalID *string `json:"external_id,omitempty"`
    FirstName string `json:"first_name"`
    ID *string `json:"id,omitempty"`
    LastName string `json:"last_name"`
    RoleIds []string `json:"role_ids,omitempty"`
    Status *string `json:"status,omitempty"`
    UpdatedAt *string `json:"updated_at,omitempty"`
    
}

