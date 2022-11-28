package shared

// V2LanguageTrainParams
// JSON that contains parameters that specify how the model is created
type V2LanguageTrainParams struct {
	TrainSplitRatio     *float32 `json:"trainSplitRatio,omitempty"`
	WithFeedback        *bool    `json:"withFeedback,omitempty"`
	WithGlobalDatasetID *int64   `json:"withGlobalDatasetId,omitempty"`
}
