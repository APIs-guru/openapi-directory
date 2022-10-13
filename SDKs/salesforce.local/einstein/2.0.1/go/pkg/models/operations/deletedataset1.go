package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteDataset1PathParams struct {
	DatasetID string `pathParam:"style=simple,explode=false,name=datasetId"`
}

type DeleteDataset1Security struct {
	BearerToken shared.SchemeBearerToken `security:"scheme,type=http,subtype=bearer"`
}

type DeleteDataset1Request struct {
	PathParams DeleteDataset1PathParams
	Security   DeleteDataset1Security
}

type DeleteDataset1Response struct {
	ContentType      string
	DeletionResponse *shared.DeletionResponse
	StatusCode       int64
}
