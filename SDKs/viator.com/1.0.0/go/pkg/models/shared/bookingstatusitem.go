package shared

type BookingStatusItemLevelEnum string

const (
	BookingStatusItemLevelEnumItem      BookingStatusItemLevelEnum = "ITEM"
	BookingStatusItemLevelEnumItinerary BookingStatusItemLevelEnum = "ITINERARY"
)

type BookingStatusItemTypeEnum string

const (
	BookingStatusItemTypeEnumWaiting      BookingStatusItemTypeEnum = "WAITING"
	BookingStatusItemTypeEnumConfirmed    BookingStatusItemTypeEnum = "CONFIRMED"
	BookingStatusItemTypeEnumUnavailable  BookingStatusItemTypeEnum = "UNAVAILABLE"
	BookingStatusItemTypeEnumPending      BookingStatusItemTypeEnum = "PENDING"
	BookingStatusItemTypeEnumFailed       BookingStatusItemTypeEnum = "FAILED"
	BookingStatusItemTypeEnumCancelled    BookingStatusItemTypeEnum = "CANCELLED"
	BookingStatusItemTypeEnumExpired      BookingStatusItemTypeEnum = "EXPIRED"
	BookingStatusItemTypeEnumAmended      BookingStatusItemTypeEnum = "AMENDED"
	BookingStatusItemTypeEnumPendingAmend BookingStatusItemTypeEnum = "PENDING_AMEND"
	BookingStatusItemTypeEnumRejected     BookingStatusItemTypeEnum = "REJECTED"
	BookingStatusItemTypeEnumOnHold       BookingStatusItemTypeEnum = "ON_HOLD"
)

// BookingStatusItem
// **object** containing item booking status information
type BookingStatusItem struct {
	Amended   *bool                       `json:"amended,omitempty"`
	Cancelled *bool                       `json:"cancelled,omitempty"`
	Confirmed *bool                       `json:"confirmed,omitempty"`
	Failed    *bool                       `json:"failed,omitempty"`
	Level     *BookingStatusItemLevelEnum `json:"level,omitempty"`
	Pending   *bool                       `json:"pending,omitempty"`
	Status    *int64                      `json:"status,omitempty"`
	Text      *string                     `json:"text,omitempty"`
	Type      *BookingStatusItemTypeEnum  `json:"type,omitempty"`
}
