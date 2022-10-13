package shared

type V1Employee struct {
	AuthorizedLocationIds []string `json:"authorized_location_ids"`
	CreatedAt             *string  `json:"created_at"`
	Email                 *string  `json:"email"`
	ExternalID            *string  `json:"external_id"`
	FirstName             string   `json:"first_name"`
	ID                    *string  `json:"id"`
	LastName              string   `json:"last_name"`
	RoleIds               []string `json:"role_ids"`
	Status                *string  `json:"status"`
	UpdatedAt             *string  `json:"updated_at"`
}
