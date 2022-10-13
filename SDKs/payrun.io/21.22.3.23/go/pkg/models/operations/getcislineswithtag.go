package operations

import (
	"openapi/pkg/models/shared"
)

type GetCisLinesWithTagPathParams struct {
	EmployerID      string `pathParam:"style=simple,explode=false,name=EmployerId"`
	SubContractorID string `pathParam:"style=simple,explode=false,name=SubContractorId"`
	TagID           string `pathParam:"style=simple,explode=false,name=TagId"`
}

type GetCisLinesWithTagHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type GetCisLinesWithTagRequest struct {
	PathParams GetCisLinesWithTagPathParams
	Headers    GetCisLinesWithTagHeaders
}

type GetCisLinesWithTagResponse struct {
	ContentType    string
	ErrorModel     *shared.ErrorModel
	LinkCollection *shared.LinkCollection
	StatusCode     int64
}
