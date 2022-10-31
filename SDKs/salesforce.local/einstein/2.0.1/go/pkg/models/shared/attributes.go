package shared

type Attributes struct {
	CellLocation *CellLocation `json:"cellLocation,omitempty"`
	Language     *string       `json:"language,omitempty"`
	PageNumber   *string       `json:"pageNumber,omitempty"`
	Tag          *string       `json:"tag,omitempty"`
	Value        *EntityObject `json:"value,omitempty"`
}
