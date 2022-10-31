package shared



type BatchRetrieveOrdersRequest struct {
    LocationID *string `json:"location_id,omitempty"`
    OrderIds []string `json:"order_ids"`
    
}

