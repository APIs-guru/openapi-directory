package shared

// Track
// A track contains an array of clips. Tracks are layered on top of each other in the order in the array. The top most track will render on top of those below it.
type Track struct {
	Clips []Clip `json:"clips"`
}
