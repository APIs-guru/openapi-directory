package shared

type CategoryGroup struct {
	Deleted bool   `json:"deleted"`
	Hidden  bool   `json:"hidden"`
	ID      string `json:"id"`
	Name    string `json:"name"`
}
