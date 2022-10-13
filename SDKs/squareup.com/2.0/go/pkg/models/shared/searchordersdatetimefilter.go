package shared

type SearchOrdersDateTimeFilter struct {
	ClosedAt  *TimeRange `json:"closed_at"`
	CreatedAt *TimeRange `json:"created_at"`
	UpdatedAt *TimeRange `json:"updated_at"`
}
