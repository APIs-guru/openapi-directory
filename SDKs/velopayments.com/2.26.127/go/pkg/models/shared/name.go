package shared

type Name struct {
	FirstName  *string `json:"firstName"`
	LastName   *string `json:"lastName"`
	OtherNames *string `json:"otherNames"`
	Title      *string `json:"title"`
}
