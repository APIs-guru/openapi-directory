package shared

type GetContiuousCheckHistoryOutput struct {
	History []Change `json:"history"`
	Next    *string  `json:"next"`
	Self    *string  `json:"self"`
}
