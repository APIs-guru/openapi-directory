package operations

import (
	"openapi/pkg/models/shared"
)

type DeletePayRunEmployeePathParams struct {
	EmployeeID    string `pathParam:"style=simple,explode=false,name=EmployeeId"`
	EmployerID    string `pathParam:"style=simple,explode=false,name=EmployerId"`
	PayRunID      string `pathParam:"style=simple,explode=false,name=PayRunId"`
	PayScheduleID string `pathParam:"style=simple,explode=false,name=PayScheduleId"`
}

type DeletePayRunEmployeeHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type DeletePayRunEmployeeRequest struct {
	PathParams DeletePayRunEmployeePathParams
	Headers    DeletePayRunEmployeeHeaders
}

type DeletePayRunEmployeeResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	StatusCode  int64
}
