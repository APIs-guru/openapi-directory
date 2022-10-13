package operations

import (
	"openapi/pkg/models/shared"
)

type PutDatasetPkPathParams struct {
	Pk int64 `pathParam:"style=simple,explode=false,name=pk"`
}

type PutDatasetPkQueryParams struct {
	OverrideColumns *bool `queryParam:"style=form,explode=true,name=override_columns"`
}

type PutDatasetPkSecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type PutDatasetPkRequest struct {
	PathParams  PutDatasetPkPathParams
	QueryParams PutDatasetPkQueryParams
	Request     shared.DatasetRestAPIPut `request:"mediaType=application/json"`
	Security    PutDatasetPkSecurity
}

type PutDatasetPk200ApplicationJSON struct {
	ID     *float64                  `json:"id"`
	Result *shared.DatasetRestAPIPut `json:"result"`
}

type PutDatasetPk400ApplicationJSON struct {
	Message *string `json:"message"`
}

type PutDatasetPk401ApplicationJSON struct {
	Message *string `json:"message"`
}

type PutDatasetPk403ApplicationJSON struct {
	Message *string `json:"message"`
}

type PutDatasetPk404ApplicationJSON struct {
	Message *string `json:"message"`
}

type PutDatasetPk422ApplicationJSON struct {
	Message *string `json:"message"`
}

type PutDatasetPk500ApplicationJSON struct {
	Message *string `json:"message"`
}

type PutDatasetPkResponse struct {
	ContentType                          string
	PutDatasetPk200ApplicationJSONObject *PutDatasetPk200ApplicationJSON
	PutDatasetPk400ApplicationJSONObject *PutDatasetPk400ApplicationJSON
	PutDatasetPk401ApplicationJSONObject *PutDatasetPk401ApplicationJSON
	PutDatasetPk403ApplicationJSONObject *PutDatasetPk403ApplicationJSON
	PutDatasetPk404ApplicationJSONObject *PutDatasetPk404ApplicationJSON
	PutDatasetPk422ApplicationJSONObject *PutDatasetPk422ApplicationJSON
	PutDatasetPk500ApplicationJSONObject *PutDatasetPk500ApplicationJSON
	StatusCode                           int64
}
