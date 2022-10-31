package operations

import (
	"openapi/pkg/models/shared"
)

type GetProblemEventPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetProblemEventQueryParams struct {
	Time *int64 `queryParam:"style=form,explode=true,name=time"`
}

type GetProblemEventSecurity struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetProblemEventRequest struct {
	PathParams  GetProblemEventPathParams
	QueryParams GetProblemEventQueryParams
	Security    GetProblemEventSecurity
}

type GetProblemEventResponse struct {
	APIError     *shared.APIError
	ContentType  string
	ProblemEvent *shared.ProblemEvent
	StatusCode   int64
}
