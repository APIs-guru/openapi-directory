package shared

// AssetResponse
// The response returned by the Serve API [get asset](#get-asset) request. Includes details of a hosted video, image, audio file, thumbnail or poster image. The response follows the [json:api](https://jsonapi.org/) specification.
type AssetResponse struct {
	Data *AssetResponseData `json:"data,omitempty"`
}
