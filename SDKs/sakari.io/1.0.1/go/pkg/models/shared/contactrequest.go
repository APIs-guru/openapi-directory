package shared

type ContactRequestMobile struct {
	Country *string `json:"country"`
	Number  *string `json:"number"`
}

type ContactRequest struct {
	Attributes map[string]interface{} `json:"attributes"`
	Email      *string                `json:"email"`
	FirstName  *string                `json:"firstName"`
	ID         *string                `json:"id"`
	LastName   *string                `json:"lastName"`
	Mobile     *ContactRequestMobile  `json:"mobile"`
	Tags       []Tag                  `json:"tags"`
}
