package shared

type User struct {
	ContactNumbers []Contact       `json:"contact_numbers"`
	Email          *string         `json:"email"`
	Extensions     []UserExtension `json:"extensions"`
	FirstName      *string         `json:"first_name"`
	ID             *float64        `json:"id"`
	LastName       *string         `json:"last_name"`
	LoginName      *string         `json:"login_name"`
}
