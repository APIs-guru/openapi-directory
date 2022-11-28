package shared

// TableRow
// A table row, containing one or more cells
type TableRow struct {
	Cells []TableCell `json:"cells"`
}
