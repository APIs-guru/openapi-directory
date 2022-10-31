package operations

import (
	"openapi/pkg/models/shared"
)

type GetTrainedModelLearningCurvePathParams struct {
	ModelID string `pathParam:"style=simple,explode=false,name=modelId"`
}

type GetTrainedModelLearningCurveQueryParams struct {
	Count  *string `queryParam:"style=form,explode=true,name=count"`
	Offset *string `queryParam:"style=form,explode=true,name=offset"`
}

type GetTrainedModelLearningCurveSecurity struct {
	BearerToken shared.SchemeBearerToken `security:"scheme,type=http,subtype=bearer"`
}

type GetTrainedModelLearningCurveRequest struct {
	PathParams  GetTrainedModelLearningCurvePathParams
	QueryParams GetTrainedModelLearningCurveQueryParams
	Security    GetTrainedModelLearningCurveSecurity
}

type GetTrainedModelLearningCurveResponse struct {
	ContentType       string
	LearningCurveList *shared.LearningCurveList
	StatusCode        int64
}
