package operations

import (
	"openapi/pkg/models/shared"
)

type GetTagFromCisLinePathParams struct {
	CisLineID       string `pathParam:"style=simple,explode=false,name=CisLineId"`
	EmployerID      string `pathParam:"style=simple,explode=false,name=EmployerId"`
	SubContractorID string `pathParam:"style=simple,explode=false,name=SubContractorId"`
	TagID           string `pathParam:"style=simple,explode=false,name=TagId"`
}

type GetTagFromCisLineHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type GetTagFromCisLineRequest struct {
	PathParams GetTagFromCisLinePathParams
	Headers    GetTagFromCisLineHeaders
}

type GetTagFromCisLineResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	StatusCode  int64
	Tag         *shared.Tag
}
