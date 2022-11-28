package shared

// Table
// Represents a table to lay out search results
type Table struct {
	Rows  []TableRow `json:"rows"`
	Title string     `json:"title"`
}
