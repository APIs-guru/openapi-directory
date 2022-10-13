package shared

type OrderFulfillment struct {
	Metadata        map[string]string                `json:"metadata"`
	PickupDetails   *OrderFulfillmentPickupDetails   `json:"pickup_details"`
	ShipmentDetails *OrderFulfillmentShipmentDetails `json:"shipment_details"`
	State           *string                          `json:"state"`
	Type            *string                          `json:"type"`
	UID             *string                          `json:"uid"`
}
