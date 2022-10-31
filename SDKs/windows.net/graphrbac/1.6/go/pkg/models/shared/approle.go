package shared



type AppRole struct {
    AllowedMemberTypes []string `json:"allowedMemberTypes,omitempty"`
    Description *string `json:"description,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    ID *string `json:"id,omitempty"`
    IsEnabled *bool `json:"isEnabled,omitempty"`
    Value *string `json:"value,omitempty"`
    
}

