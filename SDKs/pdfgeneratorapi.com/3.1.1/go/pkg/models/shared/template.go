package shared

type Template struct {
	ID       *int64   `json:"id"`
	Modified *string  `json:"modified"`
	Name     *string  `json:"name"`
	Owner    *bool    `json:"owner"`
	Tags     []string `json:"tags"`
}
