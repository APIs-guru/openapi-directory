package shared

type Employee struct {
	CreatedAt   *string  `json:"created_at"`
	Email       *string  `json:"email"`
	FirstName   *string  `json:"first_name"`
	ID          *string  `json:"id"`
	IsOwner     *bool    `json:"is_owner"`
	LastName    *string  `json:"last_name"`
	LocationIds []string `json:"location_ids"`
	PhoneNumber *string  `json:"phone_number"`
	Status      *string  `json:"status"`
	UpdatedAt   *string  `json:"updated_at"`
}
