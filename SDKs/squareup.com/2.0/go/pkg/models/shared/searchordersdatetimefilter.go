package shared

type SearchOrdersDateTimeFilter struct {
	ClosedAt  *TimeRange `json:"closed_at,omitempty"`
	CreatedAt *TimeRange `json:"created_at,omitempty"`
	UpdatedAt *TimeRange `json:"updated_at,omitempty"`
}
