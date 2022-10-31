package shared

type AssetResponseData struct {
	Attributes *AssetResponseAttributes `json:"attributes,omitempty"`
	Type       *string                  `json:"type,omitempty"`
}
