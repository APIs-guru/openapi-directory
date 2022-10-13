package shared

type Name2 struct {
	FirstName  *string `json:"firstName"`
	LastName   *string `json:"lastName"`
	OtherNames *string `json:"otherNames"`
	Title      *string `json:"title"`
}
