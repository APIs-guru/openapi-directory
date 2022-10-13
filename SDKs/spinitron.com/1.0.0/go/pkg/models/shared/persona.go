package shared

type PersonaLinks struct {
	Self  *Link  `json:"self"`
	Shows []Link `json:"shows"`
}

type Persona struct {
	Links   *PersonaLinks `json:"_links"`
	Bio     *string       `json:"bio"`
	Email   *string       `json:"email"`
	ID      *int64        `json:"id"`
	Image   *string       `json:"image"`
	Name    *string       `json:"name"`
	Since   *int64        `json:"since"`
	Website *string       `json:"website"`
}
