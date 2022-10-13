package shared

type Booking struct {
	AppointmentSegments []AppointmentSegment `json:"appointment_segments"`
	CreatedAt           *string              `json:"created_at"`
	CustomerID          *string              `json:"customer_id"`
	CustomerNote        *string              `json:"customer_note"`
	ID                  *string              `json:"id"`
	LocationID          *string              `json:"location_id"`
	SellerNote          *string              `json:"seller_note"`
	StartAt             *string              `json:"start_at"`
	Status              *string              `json:"status"`
	UpdatedAt           *string              `json:"updated_at"`
	Version             *int64               `json:"version"`
}
