package shared



type PriceFormatted struct {
    American *string `json:"american,omitempty"`
    Decimal *float64 `json:"decimal,omitempty"`
    Fractional *string `json:"fractional,omitempty"`
    
}

