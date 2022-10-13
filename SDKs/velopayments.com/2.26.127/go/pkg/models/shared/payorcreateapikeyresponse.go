package shared

type PayorCreateAPIKeyResponse struct {
	APIKey    *string `json:"apiKey"`
	APISecret *string `json:"apiSecret"`
}
