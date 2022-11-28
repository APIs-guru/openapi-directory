package shared

// AssetResponseData
// The type of resource (an asset) and attributes of the asset.
type AssetResponseData struct {
	Attributes *AssetResponseAttributes `json:"attributes,omitempty"`
	Type       *string                  `json:"type,omitempty"`
}
