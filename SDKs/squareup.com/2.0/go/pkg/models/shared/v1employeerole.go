package shared



type V1EmployeeRole struct {
    CreatedAt *string `json:"created_at,omitempty"`
    ID *string `json:"id,omitempty"`
    IsOwner *bool `json:"is_owner,omitempty"`
    Name string `json:"name"`
    Permissions []string `json:"permissions"`
    UpdatedAt *string `json:"updated_at,omitempty"`
    
}

