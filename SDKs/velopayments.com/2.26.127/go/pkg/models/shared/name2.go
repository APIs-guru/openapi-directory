package shared



type Name2 struct {
    FirstName *string `json:"firstName,omitempty"`
    LastName *string `json:"lastName,omitempty"`
    OtherNames *string `json:"otherNames,omitempty"`
    Title *string `json:"title,omitempty"`
    
}

