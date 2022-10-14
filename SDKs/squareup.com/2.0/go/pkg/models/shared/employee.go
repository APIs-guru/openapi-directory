package shared

type Employee struct {
	CreatedAt   *string  `json:"created_at,omitempty"`
	Email       *string  `json:"email,omitempty"`
	FirstName   *string  `json:"first_name,omitempty"`
	ID          *string  `json:"id,omitempty"`
	IsOwner     *bool    `json:"is_owner,omitempty"`
	LastName    *string  `json:"last_name,omitempty"`
	LocationIds []string `json:"location_ids,omitempty"`
	PhoneNumber *string  `json:"phone_number,omitempty"`
	Status      *string  `json:"status,omitempty"`
	UpdatedAt   *string  `json:"updated_at,omitempty"`
}
