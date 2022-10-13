package shared

type ContactIdentifiersMobile struct {
	Country *string `json:"country"`
	Number  *string `json:"number"`
}

type ContactIdentifiers struct {
	Email     *string                   `json:"email"`
	FirstName *string                   `json:"firstName"`
	ID        *string                   `json:"id"`
	LastName  *string                   `json:"lastName"`
	Mobile    *ContactIdentifiersMobile `json:"mobile"`
}
