package shared

// V2VisionTrainParams
// JSON that contains parameters that specify how the model is created
type V2VisionTrainParams struct {
	TrainSplitRatio     *float32 `json:"trainSplitRatio,omitempty"`
	WithFeedback        *bool    `json:"withFeedback,omitempty"`
	WithGlobalDatasetID *int64   `json:"withGlobalDatasetId,omitempty"`
}
