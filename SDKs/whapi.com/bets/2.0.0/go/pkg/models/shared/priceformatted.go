package shared

type PriceFormatted struct {
	American   *string  `json:"american"`
	Decimal    *float64 `json:"decimal"`
	Fractional *string  `json:"fractional"`
}
