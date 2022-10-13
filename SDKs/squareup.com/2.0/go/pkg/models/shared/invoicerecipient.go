package shared

type InvoiceRecipient struct {
	Address      *Address `json:"address"`
	CompanyName  *string  `json:"company_name"`
	CustomerID   *string  `json:"customer_id"`
	EmailAddress *string  `json:"email_address"`
	FamilyName   *string  `json:"family_name"`
	GivenName    *string  `json:"given_name"`
	PhoneNumber  *string  `json:"phone_number"`
}
