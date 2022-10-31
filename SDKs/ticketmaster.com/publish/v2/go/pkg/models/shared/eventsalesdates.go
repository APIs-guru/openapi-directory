package shared

type EventSalesDates struct {
	Presales []Presale        `json:"presales,omitempty"`
	Public   *PublicSaleDates `json:"public,omitempty"`
}
