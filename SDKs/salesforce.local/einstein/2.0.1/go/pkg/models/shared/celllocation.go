package shared

type CellLocation struct {
	ColIndex *int32 `json:"colIndex,omitempty"`
	RowIndex *int32 `json:"rowIndex,omitempty"`
}
