package shared

type EventStatusCodeEnum string

const (
	EventStatusCodeEnumOnsale      EventStatusCodeEnum = "onsale"
	EventStatusCodeEnumOffsale     EventStatusCodeEnum = "offsale"
	EventStatusCodeEnumCanceled    EventStatusCodeEnum = "canceled"
	EventStatusCodeEnumPostponed   EventStatusCodeEnum = "postponed"
	EventStatusCodeEnumRescheduled EventStatusCodeEnum = "rescheduled"
)

type EventStatus struct {
	Code *EventStatusCodeEnum `json:"code"`
}
