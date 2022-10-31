package shared

type GetPayoutStatistics struct {
	ThisMonthFailedPaymentsCount int64 `json:"thisMonthFailedPaymentsCount"`
	ThisMonthPayoutsCount        int64 `json:"thisMonthPayoutsCount"`
}
