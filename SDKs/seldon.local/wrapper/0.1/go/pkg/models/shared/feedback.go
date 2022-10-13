package shared

type Feedback struct {
	Request  *SeldonMessage `json:"request"`
	Response *SeldonMessage `json:"response"`
	Reward   *float32       `json:"reward"`
	Truth    *SeldonMessage `json:"truth"`
}
