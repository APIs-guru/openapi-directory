package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteDatasetQueryParams struct {
	Q []int64 `queryParam:"serialization=json,name=q"`
}

type DeleteDatasetSecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type DeleteDatasetRequest struct {
	QueryParams DeleteDatasetQueryParams
	Security    DeleteDatasetSecurity
}

type DeleteDataset200ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type DeleteDataset400ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type DeleteDataset401ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type DeleteDataset403ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type DeleteDataset404ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type DeleteDataset422ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type DeleteDataset500ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type DeleteDatasetResponse struct {
	ContentType                           string
	DeleteDataset200ApplicationJSONObject *DeleteDataset200ApplicationJSON
	DeleteDataset400ApplicationJSONObject *DeleteDataset400ApplicationJSON
	DeleteDataset401ApplicationJSONObject *DeleteDataset401ApplicationJSON
	DeleteDataset403ApplicationJSONObject *DeleteDataset403ApplicationJSON
	DeleteDataset404ApplicationJSONObject *DeleteDataset404ApplicationJSON
	DeleteDataset422ApplicationJSONObject *DeleteDataset422ApplicationJSON
	DeleteDataset500ApplicationJSONObject *DeleteDataset500ApplicationJSON
	StatusCode                            int64
}
