package shared

type V1EmployeeRole struct {
	CreatedAt   *string  `json:"created_at"`
	ID          *string  `json:"id"`
	IsOwner     *bool    `json:"is_owner"`
	Name        string   `json:"name"`
	Permissions []string `json:"permissions"`
	UpdatedAt   *string  `json:"updated_at"`
}
