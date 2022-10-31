package shared

type GetContiuousCheckHistoryOutput struct {
	History []Change `json:"history"`
	Next    *string  `json:"next,omitempty"`
	Self    *string  `json:"self,omitempty"`
}
