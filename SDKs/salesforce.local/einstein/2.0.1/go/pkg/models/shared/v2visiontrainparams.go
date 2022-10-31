package shared



type V2VisionTrainParams struct {
    TrainSplitRatio *float32 `json:"trainSplitRatio,omitempty"`
    WithFeedback *bool `json:"withFeedback,omitempty"`
    WithGlobalDatasetID *int64 `json:"withGlobalDatasetId,omitempty"`
    
}

