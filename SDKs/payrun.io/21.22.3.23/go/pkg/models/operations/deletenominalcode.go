package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteNominalCodePathParams struct {
	EmployerID    string `pathParam:"style=simple,explode=false,name=EmployerId"`
	NominalCodeID string `pathParam:"style=simple,explode=false,name=NominalCodeId"`
}

type DeleteNominalCodeHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type DeleteNominalCodeRequest struct {
	PathParams DeleteNominalCodePathParams
	Headers    DeleteNominalCodeHeaders
}

type DeleteNominalCodeResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	StatusCode  int64
}
