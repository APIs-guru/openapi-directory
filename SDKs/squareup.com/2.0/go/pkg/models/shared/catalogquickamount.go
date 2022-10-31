package shared



type CatalogQuickAmount struct {
    Amount Money `json:"amount"`
    Ordinal *int64 `json:"ordinal,omitempty"`
    Score *int64 `json:"score,omitempty"`
    Type string `json:"type"`
    
}

