package shared

type Table struct {
	Rows  []TableRow `json:"rows"`
	Title string     `json:"title"`
}
