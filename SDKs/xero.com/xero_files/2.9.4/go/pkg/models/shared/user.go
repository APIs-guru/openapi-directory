package shared

type User struct {
	FirstName *string `json:"FirstName"`
	FullName  *string `json:"FullName"`
	ID        string  `json:"Id"`
	LastName  *string `json:"LastName"`
	Name      *string `json:"Name"`
}
