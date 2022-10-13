package operations

import (
	"openapi/pkg/models/shared"
)

type GetEmployerSecretsPathParams struct {
	EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
}

type GetEmployerSecretsHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type GetEmployerSecretsRequest struct {
	PathParams GetEmployerSecretsPathParams
	Headers    GetEmployerSecretsHeaders
}

type GetEmployerSecretsResponse struct {
	ContentType    string
	ErrorModel     *shared.ErrorModel
	LinkCollection *shared.LinkCollection
	StatusCode     int64
}
