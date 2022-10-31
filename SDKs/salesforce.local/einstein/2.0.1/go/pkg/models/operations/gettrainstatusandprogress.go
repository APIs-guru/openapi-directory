package operations

import (
	"openapi/pkg/models/shared"
)

type GetTrainStatusAndProgressPathParams struct {
	ModelID string `pathParam:"style=simple,explode=false,name=modelId"`
}

type GetTrainStatusAndProgressSecurity struct {
	BearerToken shared.SchemeBearerToken `security:"scheme,type=http,subtype=bearer"`
}

type GetTrainStatusAndProgressRequest struct {
	PathParams GetTrainStatusAndProgressPathParams
	Security   GetTrainStatusAndProgressSecurity
}

type GetTrainStatusAndProgressResponse struct {
	ContentType   string
	StatusCode    int64
	TrainResponse *shared.TrainResponse
}
