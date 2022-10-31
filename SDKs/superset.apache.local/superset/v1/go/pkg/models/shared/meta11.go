package shared

type Meta11 struct {
	FirstName string `json:"first_name"`
	ID        *int32 `json:"id,omitempty"`
	LastName  string `json:"last_name"`
}
