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

type BookingStatusItinerary struct {
	Amended   *bool                            `json:"amended"`
	Cancelled *bool                            `json:"cancelled"`
	Confirmed *bool                            `json:"confirmed"`
	Failed    *bool                            `json:"failed"`
	Level     *BookingStatusItineraryLevelEnum `json:"level"`
	Pending   *bool                            `json:"pending"`
	Status    *int64                           `json:"status"`
	Text      *string                          `json:"text"`
	Type      *BookingStatusItineraryTypeEnum  `json:"type"`
}
