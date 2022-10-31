package shared

type AgentResponse struct {
	AssetURI *string `json:"assetUri,omitempty"`
	Family   *string `json:"family,omitempty"`
	Name     *string `json:"name,omitempty"`
}
