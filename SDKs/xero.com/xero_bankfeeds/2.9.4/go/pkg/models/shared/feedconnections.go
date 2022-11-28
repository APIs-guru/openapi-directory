package shared

// FeedConnections

// https://developer.xero.com/documentation/bank-feeds-api/feed-connections
type FeedConnections struct {
	Items      []FeedConnection `json:"items,omitempty"`
	Pagination *Pagination      `json:"pagination,omitempty"`
}
