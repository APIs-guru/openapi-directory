package shared

type BehaviourOutput struct {
	Behavior []Behavior `json:"behavior"`
	Self     string     `json:"self"`
}
