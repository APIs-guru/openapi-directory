package operations

import (
	"openapi/pkg/models/shared"
)

type GetDataset1PathParams struct {
	DatasetID string `pathParam:"style=simple,explode=false,name=datasetId"`
}

type GetDataset1Security struct {
	BearerToken shared.SchemeBearerToken `security:"scheme,type=http,subtype=bearer"`
}

type GetDataset1Request struct {
	PathParams GetDataset1PathParams
	Security   GetDataset1Security
}

type GetDataset1Response struct {
	ContentType string
	Dataset     *shared.Dataset
	StatusCode  int64
}
