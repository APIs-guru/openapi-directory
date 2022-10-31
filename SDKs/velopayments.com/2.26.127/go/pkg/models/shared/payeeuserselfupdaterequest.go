package shared



type PayeeUserSelfUpdateRequest struct {
    Email *string `json:"email,omitempty"`
    FirstName *string `json:"firstName,omitempty"`
    LastName *string `json:"lastName,omitempty"`
    PrimaryContactNumber *string `json:"primaryContactNumber,omitempty"`
    SecondaryContactNumber *string `json:"secondaryContactNumber,omitempty"`
    SmsNumber *string `json:"smsNumber,omitempty"`
    
}

