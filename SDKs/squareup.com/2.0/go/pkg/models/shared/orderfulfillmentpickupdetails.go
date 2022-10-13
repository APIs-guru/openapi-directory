package shared

type OrderFulfillmentPickupDetails struct {
	AcceptedAt            *string                                             `json:"accepted_at"`
	AutoCompleteDuration  *string                                             `json:"auto_complete_duration"`
	CancelReason          *string                                             `json:"cancel_reason"`
	CanceledAt            *string                                             `json:"canceled_at"`
	CurbsidePickupDetails *OrderFulfillmentPickupDetailsCurbsidePickupDetails `json:"curbside_pickup_details"`
	ExpiredAt             *string                                             `json:"expired_at"`
	ExpiresAt             *string                                             `json:"expires_at"`
	IsCurbsidePickup      *bool                                               `json:"is_curbside_pickup"`
	Note                  *string                                             `json:"note"`
	PickedUpAt            *string                                             `json:"picked_up_at"`
	PickupAt              *string                                             `json:"pickup_at"`
	PickupWindowDuration  *string                                             `json:"pickup_window_duration"`
	PlacedAt              *string                                             `json:"placed_at"`
	PrepTimeDuration      *string                                             `json:"prep_time_duration"`
	ReadyAt               *string                                             `json:"ready_at"`
	Recipient             *OrderFulfillmentRecipient                          `json:"recipient"`
	RejectedAt            *string                                             `json:"rejected_at"`
	ScheduleType          *string                                             `json:"schedule_type"`
}
