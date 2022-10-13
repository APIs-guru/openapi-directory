package shared

type Contact struct {
	Email     *string `json:"email"`
	FirstName *string `json:"firstName"`
	ID        *string `json:"id"`
	LastName  *string `json:"lastName"`
	Phone     *string `json:"phone"`
}
