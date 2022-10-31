package shared

type User struct {
	FirstName *string `json:"first_name,omitempty"`
	ID        *int32  `json:"id,omitempty"`
	LastName  *string `json:"last_name,omitempty"`
	Username  *string `json:"username,omitempty"`
}
