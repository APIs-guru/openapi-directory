package shared

type Label struct {
	DatasetID   int64  `json:"datasetId"`
	ID          *int64 `json:"id"`
	Name        string `json:"name"`
	NumExamples *int64 `json:"numExamples"`
}
