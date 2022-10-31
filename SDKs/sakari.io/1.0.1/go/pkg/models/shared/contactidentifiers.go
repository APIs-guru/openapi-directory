package shared



type ContactIdentifiersMobile struct {
    Country *string `json:"country,omitempty"`
    Number *string `json:"number,omitempty"`
    
}

type ContactIdentifiers struct {
    Email *string `json:"email,omitempty"`
    FirstName *string `json:"firstName,omitempty"`
    ID *string `json:"id,omitempty"`
    LastName *string `json:"lastName,omitempty"`
    Mobile *ContactIdentifiersMobile `json:"mobile,omitempty"`
    
}

