package shared

// Label
// Contains information about the label with which the example is associated.
type Label struct {
	DatasetID   int64  `json:"datasetId"`
	ID          *int64 `json:"id,omitempty"`
	Name        string `json:"name"`
	NumExamples *int64 `json:"numExamples,omitempty"`
}
