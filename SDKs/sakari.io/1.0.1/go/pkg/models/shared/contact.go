package shared



type ContactMobile struct {
    Country *string `json:"country,omitempty"`
    Number *string `json:"number,omitempty"`
    
}

type Contact struct {
    Attributes map[string]interface{} `json:"attributes,omitempty"`
    Created *Updated `json:"created,omitempty"`
    Email *string `json:"email,omitempty"`
    Error *Error `json:"error,omitempty"`
    FirstName *string `json:"firstName,omitempty"`
    ID *string `json:"id,omitempty"`
    LastName *string `json:"lastName,omitempty"`
    Mobile *ContactMobile `json:"mobile,omitempty"`
    Tags []Tag `json:"tags,omitempty"`
    Updated *Updated `json:"updated,omitempty"`
    Valid *bool `json:"valid,omitempty"`
    
}

