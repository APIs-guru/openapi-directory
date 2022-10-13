package operations

import (
	"openapi/pkg/models/shared"
)

type PutCisLineTypeIntoEmployerPathParams struct {
	CisLineTypeID string `pathParam:"style=simple,explode=false,name=CisLineTypeId"`
	EmployerID    string `pathParam:"style=simple,explode=false,name=EmployerId"`
}

type PutCisLineTypeIntoEmployerHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type PutCisLineTypeIntoEmployerRequest struct {
	PathParams PutCisLineTypeIntoEmployerPathParams
	Headers    PutCisLineTypeIntoEmployerHeaders
	Request    shared.CisLineType `request:"mediaType=application/json"`
}

type PutCisLineTypeIntoEmployerResponse struct {
	CisLineType *shared.CisLineType
	ContentType string
	ErrorModel  *shared.ErrorModel
	StatusCode  int64
}
