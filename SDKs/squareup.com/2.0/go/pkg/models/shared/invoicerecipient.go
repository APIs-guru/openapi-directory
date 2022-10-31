package shared



type InvoiceRecipient struct {
    Address *Address `json:"address,omitempty"`
    CompanyName *string `json:"company_name,omitempty"`
    CustomerID *string `json:"customer_id,omitempty"`
    EmailAddress *string `json:"email_address,omitempty"`
    FamilyName *string `json:"family_name,omitempty"`
    GivenName *string `json:"given_name,omitempty"`
    PhoneNumber *string `json:"phone_number,omitempty"`
    
}

