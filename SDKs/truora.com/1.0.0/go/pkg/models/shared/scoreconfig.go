package shared

// ScoreConfig
// Represents a set of configurations to determine the background check score
type ScoreConfig struct {
	DataSet string `json:"data_set"`
	Weight  string `json:"weight"`
}
