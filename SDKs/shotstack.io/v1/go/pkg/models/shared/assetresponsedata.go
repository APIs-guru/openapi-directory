package shared

type AssetResponseData struct {
	Attributes *AssetResponseAttributes `json:"attributes"`
	Type       *string                  `json:"type"`
}
