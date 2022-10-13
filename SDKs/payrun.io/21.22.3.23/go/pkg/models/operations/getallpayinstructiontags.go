package operations

import (
	"openapi/pkg/models/shared"
)

type GetAllPayInstructionTagsPathParams struct {
	EmployeeID string `pathParam:"style=simple,explode=false,name=EmployeeId"`
	EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
}

type GetAllPayInstructionTagsHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type GetAllPayInstructionTagsRequest struct {
	PathParams GetAllPayInstructionTagsPathParams
	Headers    GetAllPayInstructionTagsHeaders
}

type GetAllPayInstructionTagsResponse struct {
	ContentType    string
	ErrorModel     *shared.ErrorModel
	LinkCollection *shared.LinkCollection
	StatusCode     int64
}
