package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteCisLinePathParams struct {
	CisLineID       string `pathParam:"style=simple,explode=false,name=CisLineId"`
	EmployerID      string `pathParam:"style=simple,explode=false,name=EmployerId"`
	SubContractorID string `pathParam:"style=simple,explode=false,name=SubContractorId"`
}

type DeleteCisLineHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type DeleteCisLineRequest struct {
	PathParams DeleteCisLinePathParams
	Headers    DeleteCisLineHeaders
}

type DeleteCisLineResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	StatusCode  int64
}
