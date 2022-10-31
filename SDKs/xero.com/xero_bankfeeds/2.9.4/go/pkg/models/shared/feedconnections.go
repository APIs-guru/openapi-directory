package shared



type FeedConnections struct {
    Items []FeedConnection `json:"items,omitempty"`
    Pagination *Pagination `json:"pagination,omitempty"`
    
}

