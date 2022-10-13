package operations

import (
	"openapi/pkg/models/shared"
)

type PostDatasetSecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type PostDatasetRequest struct {
	Request  shared.DatasetRestAPIPost `request:"mediaType=application/json"`
	Security PostDatasetSecurity
}

type PostDataset201ApplicationJSON struct {
	ID     *float64                   `json:"id"`
	Result *shared.DatasetRestAPIPost `json:"result"`
}

type PostDataset400ApplicationJSON struct {
	Message *string `json:"message"`
}

type PostDataset401ApplicationJSON struct {
	Message *string `json:"message"`
}

type PostDataset422ApplicationJSON struct {
	Message *string `json:"message"`
}

type PostDataset500ApplicationJSON struct {
	Message *string `json:"message"`
}

type PostDatasetResponse struct {
	ContentType                         string
	PostDataset201ApplicationJSONObject *PostDataset201ApplicationJSON
	PostDataset400ApplicationJSONObject *PostDataset400ApplicationJSON
	PostDataset401ApplicationJSONObject *PostDataset401ApplicationJSON
	PostDataset422ApplicationJSONObject *PostDataset422ApplicationJSON
	PostDataset500ApplicationJSONObject *PostDataset500ApplicationJSON
	StatusCode                          int64
}
