package operations

import (
	"openapi/pkg/models/shared"
)

type GetEmployerRevisionsPathParams struct {
	EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
}

type GetEmployerRevisionsHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
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
