package operations

import (
	"openapi/pkg/models/shared"
)

type GetTrainedModelsPathParams struct {
	DatasetID string `pathParam:"style=simple,explode=false,name=datasetId"`
}

type GetTrainedModelsQueryParams struct {
	Count  *string `queryParam:"style=form,explode=true,name=count"`
	Offset *string `queryParam:"style=form,explode=true,name=offset"`
}

type GetTrainedModelsSecurity struct {
	BearerToken shared.SchemeBearerToken `security:"scheme,type=http,subtype=bearer"`
}

type GetTrainedModelsRequest struct {
	PathParams  GetTrainedModelsPathParams
	QueryParams GetTrainedModelsQueryParams
	Security    GetTrainedModelsSecurity
}

type GetTrainedModelsResponse struct {
	ContentType string
	ModelList   *shared.ModelList
	StatusCode  int64
}
