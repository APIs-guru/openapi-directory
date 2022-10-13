package operations

import (
	"openapi/pkg/models/shared"
)

type GetEmployerRevisionsPathParams struct {
	EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
}

type GetEmployerRevisionsHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type GetEmployerRevisionsRequest struct {
	PathParams GetEmployerRevisionsPathParams
	Headers    GetEmployerRevisionsHeaders
}

type GetEmployerRevisionsResponse struct {
	ContentType    string
	ErrorModel     *shared.ErrorModel
	LinkCollection *shared.LinkCollection
	StatusCode     int64
}
