package operations

import (
	"openapi/pkg/models/shared"
)

type GetNominalCodeFromEmployerPathParams struct {
	EmployerID    string `pathParam:"style=simple,explode=false,name=EmployerId"`
	NominalCodeID string `pathParam:"style=simple,explode=false,name=NominalCodeId"`
}

type GetNominalCodeFromEmployerHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type GetNominalCodeFromEmployerRequest struct {
	PathParams GetNominalCodeFromEmployerPathParams
	Headers    GetNominalCodeFromEmployerHeaders
}

type GetNominalCodeFromEmployerResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	NominalCode *shared.NominalCode
	StatusCode  int64
}
