package shared

type BookingStatusItineraryLevelEnum string

const (
	BookingStatusItineraryLevelEnumItem      BookingStatusItineraryLevelEnum = "ITEM"
	BookingStatusItineraryLevelEnumItinerary BookingStatusItineraryLevelEnum = "ITINERARY"
)

type BookingStatusItineraryTypeEnum string

const (
	BookingStatusItineraryTypeEnumWaiting      BookingStatusItineraryTypeEnum = "WAITING"
	BookingStatusItineraryTypeEnumConfirmed    BookingStatusItineraryTypeEnum = "CONFIRMED"
	BookingStatusItineraryTypeEnumPending      BookingStatusItineraryTypeEnum = "PENDING"
	BookingStatusItineraryTypeEnumFailed       BookingStatusItineraryTypeEnum = "FAILED"
	BookingStatusItineraryTypeEnumCancelled    BookingStatusItineraryTypeEnum = "CANCELLED"
	BookingStatusItineraryTypeEnumAmended      BookingStatusItineraryTypeEnum = "AMENDED"
	BookingStatusItineraryTypeEnumPendingAmend BookingStatusItineraryTypeEnum = "PENDING_AMEND"
)

// BookingStatusItinerary
// **object** containing itinerary booking status information
type BookingStatusItinerary struct {
	Amended   *bool                            `json:"amended,omitempty"`
	Cancelled *bool                            `json:"cancelled,omitempty"`
	Confirmed *bool                            `json:"confirmed,omitempty"`
	Failed    *bool                            `json:"failed,omitempty"`
	Level     *BookingStatusItineraryLevelEnum `json:"level,omitempty"`
	Pending   *bool                            `json:"pending,omitempty"`
	Status    *int64                           `json:"status,omitempty"`
	Text      *string                          `json:"text,omitempty"`
	Type      *BookingStatusItineraryTypeEnum  `json:"type,omitempty"`
}
