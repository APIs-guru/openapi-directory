package shared

type ContactMobile struct {
	Country *string `json:"country"`
	Number  *string `json:"number"`
}

type Contact struct {
	Attributes map[string]interface{} `json:"attributes"`
	Created    *Updated               `json:"created"`
	Email      *string                `json:"email"`
	Error      *Error                 `json:"error"`
	FirstName  *string                `json:"firstName"`
	ID         *string                `json:"id"`
	LastName   *string                `json:"lastName"`
	Mobile     *ContactMobile         `json:"mobile"`
	Tags       []Tag                  `json:"tags"`
	Updated    *Updated               `json:"updated"`
	Valid      *bool                  `json:"valid"`
}
