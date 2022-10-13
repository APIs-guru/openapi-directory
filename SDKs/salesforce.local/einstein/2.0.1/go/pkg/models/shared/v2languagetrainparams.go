package shared

type V2LanguageTrainParams struct {
	TrainSplitRatio     *float32 `json:"trainSplitRatio"`
	WithFeedback        *bool    `json:"withFeedback"`
	WithGlobalDatasetID *int64   `json:"withGlobalDatasetId"`
}
