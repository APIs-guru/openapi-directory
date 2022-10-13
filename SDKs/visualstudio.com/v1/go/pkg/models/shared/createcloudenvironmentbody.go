package shared

type CreateCloudEnvironmentBody struct {
	AutoShutdownDelayMinutes  *int32                    `json:"autoShutdownDelayMinutes"`
	Connection                *ConnectionInfoBody       `json:"connection"`
	ContainerImage            *string                   `json:"containerImage"`
	CreateAsPrebuild          *bool                     `json:"createAsPrebuild"`
	DevContainerJSON          *string                   `json:"devContainerJson"`
	ExperimentalFeatures      *ExperimentalFeaturesBody `json:"experimentalFeatures"`
	Features                  map[string]string         `json:"features"`
	FriendlyName              string                    `json:"friendlyName"`
	GithubEnvironmentEndpoint *string                   `json:"githubEnvironmentEndpoint"`
	HasDevcontainerJSON       *bool                     `json:"hasDevcontainerJson"`
	Identity                  *IdentityBody             `json:"identity"`
	Label                     *string                   `json:"label"`
	Location                  *string                   `json:"location"`
	Personalization           *PersonalizationInfoBody  `json:"personalization"`
	PlanID                    *string                   `json:"planId"`
	Platform                  *string                   `json:"platform"`
	Secrets                   []SecretDataBody          `json:"secrets"`
	Seed                      *SeedInfoBody             `json:"seed"`
	SkuName                   *string                   `json:"skuName"`
	Type                      string                    `json:"type"`
}
