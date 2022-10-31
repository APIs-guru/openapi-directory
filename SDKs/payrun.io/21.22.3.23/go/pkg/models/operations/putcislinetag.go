package operations

import (
	"openapi/pkg/models/shared"
)

type PutCisLineTagPathParams struct {
	CisLineID       string `pathParam:"style=simple,explode=false,name=CisLineId"`
	EmployerID      string `pathParam:"style=simple,explode=false,name=EmployerId"`
	SubContractorID string `pathParam:"style=simple,explode=false,name=SubContractorId"`
	TagID           string `pathParam:"style=simple,explode=false,name=TagId"`
}

type PutCisLineTagHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type PutCisLineTagRequest struct {
	PathParams PutCisLineTagPathParams
	Headers    PutCisLineTagHeaders
}

type PutCisLineTagResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	StatusCode  int64
	Tag         *shared.Tag
}
