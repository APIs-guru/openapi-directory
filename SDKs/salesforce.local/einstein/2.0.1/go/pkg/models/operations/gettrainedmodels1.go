package operations

import (
	"openapi/pkg/models/shared"
)

type GetTrainedModels1PathParams struct {
	DatasetID string `pathParam:"style=simple,explode=false,name=datasetId"`
}

type GetTrainedModels1QueryParams struct {
	Count  *string `queryParam:"style=form,explode=true,name=count"`
	Offset *string `queryParam:"style=form,explode=true,name=offset"`
}

type GetTrainedModels1Security struct {
	BearerToken shared.SchemeBearerToken `security:"scheme,type=http,subtype=bearer"`
}

type GetTrainedModels1Request struct {
	PathParams  GetTrainedModels1PathParams
	QueryParams GetTrainedModels1QueryParams
	Security    GetTrainedModels1Security
}

type GetTrainedModels1Response struct {
	ContentType string
	ModelList   *shared.ModelList
	StatusCode  int64
}
