package operations

import (
	"openapi/pkg/models/shared"
)

type GetPayLinesWithTagPathParams struct {
	EmployeeID string `pathParam:"style=simple,explode=false,name=EmployeeId"`
	EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
	TagID      string `pathParam:"style=simple,explode=false,name=TagId"`
}

type GetPayLinesWithTagHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type GetPayLinesWithTagRequest struct {
	PathParams GetPayLinesWithTagPathParams
	Headers    GetPayLinesWithTagHeaders
}

type GetPayLinesWithTagResponse struct {
	ContentType    string
	ErrorModel     *shared.ErrorModel
	LinkCollection *shared.LinkCollection
	StatusCode     int64
}
