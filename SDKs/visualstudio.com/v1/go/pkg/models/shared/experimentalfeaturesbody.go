package shared



type ExperimentalFeaturesBody struct {
    EnableDynamicHTTPSDetection *bool `json:"enableDynamicHttpsDetection,omitempty"`
    QueueResourceAllocation *bool `json:"queueResourceAllocation,omitempty"`
    UsePrebuiltImages *bool `json:"usePrebuiltImages,omitempty"`
    
}

