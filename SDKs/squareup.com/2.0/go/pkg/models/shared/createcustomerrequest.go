package shared

type CreateCustomerRequest struct {
	Address        *Address `json:"address"`
	Birthday       *string  `json:"birthday"`
	CompanyName    *string  `json:"company_name"`
	EmailAddress   *string  `json:"email_address"`
	FamilyName     *string  `json:"family_name"`
	GivenName      *string  `json:"given_name"`
	IdempotencyKey *string  `json:"idempotency_key"`
	Nickname       *string  `json:"nickname"`
	Note           *string  `json:"note"`
	PhoneNumber    *string  `json:"phone_number"`
	ReferenceID    *string  `json:"reference_id"`
}
