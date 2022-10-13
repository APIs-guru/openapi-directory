package operations

import (
	"openapi/pkg/models/shared"
)

type GetTagsFromPayInstructionPathParams struct {
	EmployeeID       string `pathParam:"style=simple,explode=false,name=EmployeeId"`
	EmployerID       string `pathParam:"style=simple,explode=false,name=EmployerId"`
	PayInstructionID string `pathParam:"style=simple,explode=false,name=PayInstructionId"`
}

type GetTagsFromPayInstructionHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type GetTagsFromPayInstructionRequest struct {
	PathParams GetTagsFromPayInstructionPathParams
	Headers    GetTagsFromPayInstructionHeaders
}

type GetTagsFromPayInstructionResponse struct {
	ContentType    string
	ErrorModel     *shared.ErrorModel
	LinkCollection *shared.LinkCollection
	StatusCode     int64
}
