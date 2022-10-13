package shared

type EventSalesDates struct {
	Presales []Presale        `json:"presales"`
	Public   *PublicSaleDates `json:"public"`
}
