package operations

import (
	"openapi/pkg/models/shared"
)

type GetEmployeeSecretsPathParams struct {
	EmployeeID string `pathParam:"style=simple,explode=false,name=EmployeeId"`
	EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
}

type GetEmployeeSecretsHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type GetEmployeeSecretsRequest struct {
	PathParams GetEmployeeSecretsPathParams
	Headers    GetEmployeeSecretsHeaders
}

type GetEmployeeSecretsResponse struct {
	ContentType    string
	ErrorModel     *shared.ErrorModel
	LinkCollection *shared.LinkCollection
	StatusCode     int64
}
