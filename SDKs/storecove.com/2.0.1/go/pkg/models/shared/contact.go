package shared

// Contact
// Contact details for the invoice
type Contact struct {
	Email     *string `json:"email,omitempty"`
	FirstName *string `json:"firstName,omitempty"`
	ID        *string `json:"id,omitempty"`
	LastName  *string `json:"lastName,omitempty"`
	Phone     *string `json:"phone,omitempty"`
}
