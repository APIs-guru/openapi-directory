package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteCisLineTypeTagPathParams struct {
	CisLineTypeID string `pathParam:"style=simple,explode=false,name=CisLineTypeId"`
	EmployerID    string `pathParam:"style=simple,explode=false,name=EmployerId"`
	TagID         string `pathParam:"style=simple,explode=false,name=TagId"`
}

type DeleteCisLineTypeTagHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type DeleteCisLineTypeTagRequest struct {
	PathParams DeleteCisLineTypeTagPathParams
	Headers    DeleteCisLineTypeTagHeaders
}

type DeleteCisLineTypeTagResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	StatusCode  int64
}
