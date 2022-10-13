package operations

import (
	"openapi/pkg/models/shared"
)

type GetDatasetPathParams struct {
	DatasetID string `pathParam:"style=simple,explode=false,name=datasetId"`
}

type GetDatasetSecurity struct {
	BearerToken shared.SchemeBearerToken `security:"scheme,type=http,subtype=bearer"`
}

type GetDatasetRequest struct {
	PathParams GetDatasetPathParams
	Security   GetDatasetSecurity
}

type GetDatasetResponse struct {
	ContentType string
	Dataset     *shared.Dataset
	StatusCode  int64
}
