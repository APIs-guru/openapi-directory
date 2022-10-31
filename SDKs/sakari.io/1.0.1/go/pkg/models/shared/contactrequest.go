package shared



type ContactRequestMobile struct {
    Country *string `json:"country,omitempty"`
    Number *string `json:"number,omitempty"`
    
}

type ContactRequest struct {
    Attributes map[string]interface{} `json:"attributes,omitempty"`
    Email *string `json:"email,omitempty"`
    FirstName *string `json:"firstName,omitempty"`
    ID *string `json:"id,omitempty"`
    LastName *string `json:"lastName,omitempty"`
    Mobile *ContactRequestMobile `json:"mobile,omitempty"`
    Tags []Tag `json:"tags,omitempty"`
    
}

