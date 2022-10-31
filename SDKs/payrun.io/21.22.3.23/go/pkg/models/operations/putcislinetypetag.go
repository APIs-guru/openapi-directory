package operations

import (
	"openapi/pkg/models/shared"
)

type PutCisLineTypeTagPathParams struct {
	CisLineTypeID string `pathParam:"style=simple,explode=false,name=CisLineTypeId"`
	EmployerID    string `pathParam:"style=simple,explode=false,name=EmployerId"`
	TagID         string `pathParam:"style=simple,explode=false,name=TagId"`
}

type PutCisLineTypeTagHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type PutCisLineTypeTagRequest struct {
	PathParams PutCisLineTypeTagPathParams
	Headers    PutCisLineTypeTagHeaders
}

type PutCisLineTypeTagResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	StatusCode  int64
	Tag         *shared.Tag
}
