package shared



type DeviceCode struct {
    Code *string `json:"code,omitempty"`
    CreatedAt *string `json:"created_at,omitempty"`
    DeviceID *string `json:"device_id,omitempty"`
    ID *string `json:"id,omitempty"`
    LocationID *string `json:"location_id,omitempty"`
    Name *string `json:"name,omitempty"`
    PairBy *string `json:"pair_by,omitempty"`
    PairedAt *string `json:"paired_at,omitempty"`
    ProductType string `json:"product_type"`
    Status *string `json:"status,omitempty"`
    StatusChangedAt *string `json:"status_changed_at,omitempty"`
    
}

