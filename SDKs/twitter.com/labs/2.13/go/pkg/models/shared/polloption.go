package shared

// PollOption
// Describes a choice in a Poll object.
type PollOption struct {
	Label    string `json:"label"`
	Position int64  `json:"position"`
	Votes    int64  `json:"votes"`
}
