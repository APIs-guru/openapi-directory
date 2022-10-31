package shared



type OrderFulfillmentPickupDetails struct {
    AcceptedAt *string `json:"accepted_at,omitempty"`
    AutoCompleteDuration *string `json:"auto_complete_duration,omitempty"`
    CancelReason *string `json:"cancel_reason,omitempty"`
    CanceledAt *string `json:"canceled_at,omitempty"`
    CurbsidePickupDetails *OrderFulfillmentPickupDetailsCurbsidePickupDetails `json:"curbside_pickup_details,omitempty"`
    ExpiredAt *string `json:"expired_at,omitempty"`
    ExpiresAt *string `json:"expires_at,omitempty"`
    IsCurbsidePickup *bool `json:"is_curbside_pickup,omitempty"`
    Note *string `json:"note,omitempty"`
    PickedUpAt *string `json:"picked_up_at,omitempty"`
    PickupAt *string `json:"pickup_at,omitempty"`
    PickupWindowDuration *string `json:"pickup_window_duration,omitempty"`
    PlacedAt *string `json:"placed_at,omitempty"`
    PrepTimeDuration *string `json:"prep_time_duration,omitempty"`
    ReadyAt *string `json:"ready_at,omitempty"`
    Recipient *OrderFulfillmentRecipient `json:"recipient,omitempty"`
    RejectedAt *string `json:"rejected_at,omitempty"`
    ScheduleType *string `json:"schedule_type,omitempty"`
    
}

