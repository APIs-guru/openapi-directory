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

type BookingStatusItem struct {
	Amended   *bool                       `json:"amended"`
	Cancelled *bool                       `json:"cancelled"`
	Confirmed *bool                       `json:"confirmed"`
	Failed    *bool                       `json:"failed"`
	Level     *BookingStatusItemLevelEnum `json:"level"`
	Pending   *bool                       `json:"pending"`
	Status    *int64                      `json:"status"`
	Text      *string                     `json:"text"`
	Type      *BookingStatusItemTypeEnum  `json:"type"`
}
