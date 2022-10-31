package shared



type OrderReturnDiscount struct {
    AmountMoney *Money `json:"amount_money,omitempty"`
    AppliedMoney *Money `json:"applied_money,omitempty"`
    CatalogObjectID *string `json:"catalog_object_id,omitempty"`
    CatalogVersion *int64 `json:"catalog_version,omitempty"`
    Name *string `json:"name,omitempty"`
    Percentage *string `json:"percentage,omitempty"`
    Scope *string `json:"scope,omitempty"`
    SourceDiscountUID *string `json:"source_discount_uid,omitempty"`
    Type *string `json:"type,omitempty"`
    UID *string `json:"uid,omitempty"`
    
}

