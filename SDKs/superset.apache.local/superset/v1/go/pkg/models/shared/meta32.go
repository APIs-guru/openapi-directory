package shared

type Meta32 struct {
	DatabaseName string `json:"database_name"`
	ID           *int32 `json:"id,omitempty"`
}
