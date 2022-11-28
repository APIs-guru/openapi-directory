package shared

// ScoreConfigsOutput
// The result of an operation that returns multiple score configs
type ScoreConfigsOutput struct {
	ScoreConfigs []ScoreConfigOutput `json:"score_configs"`
}
