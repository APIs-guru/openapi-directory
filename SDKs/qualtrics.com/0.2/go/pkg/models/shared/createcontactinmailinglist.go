package shared



type CreateContactInMailingList struct {
    Email *string `json:"email,omitempty"`
    FirstName *string `json:"firstName,omitempty"`
    LastName *string `json:"lastName,omitempty"`
    Unsubscribed *bool `json:"unsubscribed,omitempty"`
    
}

