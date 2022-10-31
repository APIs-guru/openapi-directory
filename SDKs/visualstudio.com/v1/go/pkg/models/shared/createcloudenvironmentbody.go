package shared



type CreateCloudEnvironmentBody struct {
    AutoShutdownDelayMinutes *int32 `json:"autoShutdownDelayMinutes,omitempty"`
    Connection *ConnectionInfoBody `json:"connection,omitempty"`
    ContainerImage *string `json:"containerImage,omitempty"`
    CreateAsPrebuild *bool `json:"createAsPrebuild,omitempty"`
    DevContainerJSON *string `json:"devContainerJson,omitempty"`
    ExperimentalFeatures *ExperimentalFeaturesBody `json:"experimentalFeatures,omitempty"`
    Features map[string]string `json:"features,omitempty"`
    FriendlyName string `json:"friendlyName"`
    GithubEnvironmentEndpoint *string `json:"githubEnvironmentEndpoint,omitempty"`
    HasDevcontainerJSON *bool `json:"hasDevcontainerJson,omitempty"`
    Identity *IdentityBody `json:"identity,omitempty"`
    Label *string `json:"label,omitempty"`
    Location *string `json:"location,omitempty"`
    Personalization *PersonalizationInfoBody `json:"personalization,omitempty"`
    PlanID *string `json:"planId,omitempty"`
    Platform *string `json:"platform,omitempty"`
    Secrets []SecretDataBody `json:"secrets,omitempty"`
    Seed *SeedInfoBody `json:"seed,omitempty"`
    SkuName *string `json:"skuName,omitempty"`
    Type string `json:"type"`
    
}

