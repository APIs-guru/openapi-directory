package shared

type ExperimentalFeaturesBody struct {
	EnableDynamicHTTPSDetection *bool `json:"enableDynamicHttpsDetection"`
	QueueResourceAllocation     *bool `json:"queueResourceAllocation"`
	UsePrebuiltImages           *bool `json:"usePrebuiltImages"`
}
