package shared

type FeedConnections struct {
	Items      []FeedConnection `json:"items"`
	Pagination *Pagination      `json:"pagination"`
}
