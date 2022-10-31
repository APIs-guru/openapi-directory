package shared



type OrderEntry struct {
    LocationID *string `json:"location_id,omitempty"`
    OrderID *string `json:"order_id,omitempty"`
    Version *int64 `json:"version,omitempty"`
    
}

