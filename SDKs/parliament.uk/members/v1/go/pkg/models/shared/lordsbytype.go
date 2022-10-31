package shared

type LordsByType struct {
	Bishop     *int32 `json:"bishop,omitempty"`
	Hereditary *int32 `json:"hereditary,omitempty"`
	Life       *int32 `json:"life,omitempty"`
	Party      *Party `json:"party,omitempty"`
	Total      *int32 `json:"total,omitempty"`
}
