package shared

type Change struct {
	DatasetScoreChanges *float64 `json:"dataset_score_changes"`
	ScoreChanges        []Change `json:"score_changes"`
}
