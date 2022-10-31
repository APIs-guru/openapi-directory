package operations

import (
	"openapi/pkg/models/shared"
)

type GetPayCodesWithTagPathParams struct {
	EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
	TagID      string `pathParam:"style=simple,explode=false,name=TagId"`
}

type GetPayCodesWithTagHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type GetPayCodesWithTagRequest struct {
	PathParams GetPayCodesWithTagPathParams
	Headers    GetPayCodesWithTagHeaders
}

type GetPayCodesWithTagResponse struct {
	ContentType    string
	ErrorModel     *shared.ErrorModel
	LinkCollection *shared.LinkCollection
	StatusCode     int64
}
