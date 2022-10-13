package shared

type Attributes struct {
	CellLocation *CellLocation `json:"cellLocation"`
	Language     *string       `json:"language"`
	PageNumber   *string       `json:"pageNumber"`
	Tag          *string       `json:"tag"`
	Value        *EntityObject `json:"value"`
}
