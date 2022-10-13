package operations

import (
	"openapi/pkg/models/shared"
)

type PostEmployeeIntoEmployerPathParams struct {
	EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
}

type PostEmployeeIntoEmployerHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type PostEmployeeIntoEmployerRequest struct {
	PathParams PostEmployeeIntoEmployerPathParams
	Headers    PostEmployeeIntoEmployerHeaders
	Request    shared.Employee `request:"mediaType=application/json"`
}

type PostEmployeeIntoEmployerResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	Link        *shared.Link
	StatusCode  int64
}
