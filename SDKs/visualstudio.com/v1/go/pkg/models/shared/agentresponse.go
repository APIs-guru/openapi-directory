package shared

type AgentResponse struct {
	AssetURI *string `json:"assetUri"`
	Family   *string `json:"family"`
	Name     *string `json:"name"`
}
