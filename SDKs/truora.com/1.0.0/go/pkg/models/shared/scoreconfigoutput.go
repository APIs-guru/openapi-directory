package shared

// ScoreConfigOutput
// Represents a list of score configurations that apply in the country
type ScoreConfigOutput struct {
	ScoreConfigByCountry []ScoreConfig `json:"ScoreConfigByCountry,omitempty"`
}
