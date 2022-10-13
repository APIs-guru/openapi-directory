package shared

type LordsByType struct {
	Bishop     *int32 `json:"bishop"`
	Hereditary *int32 `json:"hereditary"`
	Life       *int32 `json:"life"`
	Party      *Party `json:"party"`
	Total      *int32 `json:"total"`
}
