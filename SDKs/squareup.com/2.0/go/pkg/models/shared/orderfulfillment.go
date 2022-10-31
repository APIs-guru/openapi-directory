package shared



type OrderFulfillment struct {
    Metadata map[string]string `json:"metadata,omitempty"`
    PickupDetails *OrderFulfillmentPickupDetails `json:"pickup_details,omitempty"`
    ShipmentDetails *OrderFulfillmentShipmentDetails `json:"shipment_details,omitempty"`
    State *string `json:"state,omitempty"`
    Type *string `json:"type,omitempty"`
    UID *string `json:"uid,omitempty"`
    
}

