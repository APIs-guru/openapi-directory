package shared

// Change
// Represents changes in check scores between continuous checks
type Change struct {
	DatasetScoreChanges *float64 `json:"dataset_score_changes,omitempty"`
	ScoreChanges        []Change `json:"score_changes,omitempty"`
}
