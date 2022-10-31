package operations

import (
	"openapi/pkg/models/shared"
)

type GetDpsMessagesFromEmployerPathParams struct {
	EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
}

type GetDpsMessagesFromEmployerHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type GetDpsMessagesFromEmployerRequest struct {
	PathParams GetDpsMessagesFromEmployerPathParams
	Headers    GetDpsMessagesFromEmployerHeaders
}

type GetDpsMessagesFromEmployerResponse struct {
	ContentType    string
	ErrorModel     *shared.ErrorModel
	LinkCollection *shared.LinkCollection
	StatusCode     int64
}
