package operations

import (
	"openapi/pkg/models/shared"
)

type GetTrainedModelLearningCurve1PathParams struct {
	ModelID string `pathParam:"style=simple,explode=false,name=modelId"`
}

type GetTrainedModelLearningCurve1QueryParams struct {
	Count  *string `queryParam:"style=form,explode=true,name=count"`
	Offset *string `queryParam:"style=form,explode=true,name=offset"`
}

type GetTrainedModelLearningCurve1Security struct {
	BearerToken shared.SchemeBearerToken `security:"scheme,type=http,subtype=bearer"`
}

type GetTrainedModelLearningCurve1Request struct {
	PathParams  GetTrainedModelLearningCurve1PathParams
	QueryParams GetTrainedModelLearningCurve1QueryParams
	Security    GetTrainedModelLearningCurve1Security
}

type GetTrainedModelLearningCurve1Response struct {
	ContentType       string
	LearningCurveList *shared.LearningCurveList
	StatusCode        int64
}
