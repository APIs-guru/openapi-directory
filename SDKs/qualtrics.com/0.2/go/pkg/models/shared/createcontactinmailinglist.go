package shared

type CreateContactInMailingList struct {
	Email        *string `json:"email"`
	FirstName    *string `json:"firstName"`
	LastName     *string `json:"lastName"`
	Unsubscribed *bool   `json:"unsubscribed"`
}
