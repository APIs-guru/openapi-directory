package shared

// EventSalesDates
// Event's Sales Dates
type EventSalesDates struct {
	Presales []Presale        `json:"presales,omitempty"`
	Public   *PublicSaleDates `json:"public,omitempty"`
}
