package shared

type LoyaltyEventFilter struct {
	DateTimeFilter       *LoyaltyEventDateTimeFilter       `json:"date_time_filter"`
	LocationFilter       *LoyaltyEventLocationFilter       `json:"location_filter"`
	LoyaltyAccountFilter *LoyaltyEventLoyaltyAccountFilter `json:"loyalty_account_filter"`
	OrderFilter          *LoyaltyEventOrderFilter          `json:"order_filter"`
	TypeFilter           *LoyaltyEventTypeFilter           `json:"type_filter"`
}
