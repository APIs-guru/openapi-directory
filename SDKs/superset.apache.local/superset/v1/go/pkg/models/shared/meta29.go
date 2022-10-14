package shared

type Meta29 struct {
	FirstName string `json:"first_name"`
	ID        *int32 `json:"id,omitempty"`
	LastName  string `json:"last_name"`
}
