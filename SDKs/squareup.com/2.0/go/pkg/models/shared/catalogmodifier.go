package shared



type CatalogModifier struct {
    ModifierListID *string `json:"modifier_list_id,omitempty"`
    Name *string `json:"name,omitempty"`
    Ordinal *int64 `json:"ordinal,omitempty"`
    PriceMoney *Money `json:"price_money,omitempty"`
    
}

