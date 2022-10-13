package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteCisLineTypePathParams struct {
	CisLineTypeID string `pathParam:"style=simple,explode=false,name=CisLineTypeId"`
	EmployerID    string `pathParam:"style=simple,explode=false,name=EmployerId"`
}

type DeleteCisLineTypeHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type DeleteCisLineTypeRequest struct {
	PathParams DeleteCisLineTypePathParams
	Headers    DeleteCisLineTypeHeaders
}

type DeleteCisLineTypeResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	StatusCode  int64
}
