package shared

// BehaviourOutput
// Represents behaviour search results
type BehaviourOutput struct {
	Behavior []Behavior `json:"behavior"`
	Self     string     `json:"self"`
}
