package shared



type Change struct {
    DatasetScoreChanges *float64 `json:"dataset_score_changes,omitempty"`
    ScoreChanges []Change `json:"score_changes,omitempty"`
    
}

