package shared



type Name struct {
    FirstName *string `json:"firstName,omitempty"`
    LastName *string `json:"lastName,omitempty"`
    OtherNames *string `json:"otherNames,omitempty"`
    Title *string `json:"title,omitempty"`
    
}

