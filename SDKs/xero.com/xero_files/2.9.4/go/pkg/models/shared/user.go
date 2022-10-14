package shared

type User struct {
	FirstName *string `json:"FirstName,omitempty"`
	FullName  *string `json:"FullName,omitempty"`
	ID        string  `json:"Id"`
	LastName  *string `json:"LastName,omitempty"`
	Name      *string `json:"Name,omitempty"`
}
