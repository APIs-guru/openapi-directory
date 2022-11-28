package shared

// Attributes
// Contains additional attributes related to the task parameter. If the task parameter is table, the row and column IDs for the detected text are returned. If the task parameter is contact, the detected entity tags will be returned.
type Attributes struct {
	CellLocation *CellLocation `json:"cellLocation,omitempty"`
	Language     *string       `json:"language,omitempty"`
	PageNumber   *string       `json:"pageNumber,omitempty"`
	Tag          *string       `json:"tag,omitempty"`
	Value        *EntityObject `json:"value,omitempty"`
}
