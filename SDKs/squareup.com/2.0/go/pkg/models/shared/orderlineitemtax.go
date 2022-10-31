package shared



type OrderLineItemTax struct {
    AppliedMoney *Money `json:"applied_money,omitempty"`
    AutoApplied *bool `json:"auto_applied,omitempty"`
    CatalogObjectID *string `json:"catalog_object_id,omitempty"`
    CatalogVersion *int64 `json:"catalog_version,omitempty"`
    Metadata map[string]string `json:"metadata,omitempty"`
    Name *string `json:"name,omitempty"`
    Percentage *string `json:"percentage,omitempty"`
    Scope *string `json:"scope,omitempty"`
    Type *string `json:"type,omitempty"`
    UID *string `json:"uid,omitempty"`
    
}

