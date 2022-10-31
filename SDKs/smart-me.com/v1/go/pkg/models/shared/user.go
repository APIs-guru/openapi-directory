package shared



type User struct {
    ChildUsers []User `json:"ChildUsers,omitempty"`
    Email *string `json:"Email,omitempty"`
    ID *int64 `json:"Id,omitempty"`
    IDAsString *string `json:"IdAsString,omitempty"`
    IsAdmin *bool `json:"IsAdmin,omitempty"`
    Permissions []string `json:"Permissions,omitempty"`
    Username *string `json:"Username,omitempty"`
    
}

