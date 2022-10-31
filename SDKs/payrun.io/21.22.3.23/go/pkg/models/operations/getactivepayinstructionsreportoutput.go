package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetActivePayInstructionsReportOutputQueryParams struct {
	ActiveOn    *time.Time `queryParam:"style=form,explode=true,name=ActiveOn"`
	EmployeeKey string     `queryParam:"style=form,explode=true,name=EmployeeKey"`
	EmployerKey string     `queryParam:"style=form,explode=true,name=EmployerKey"`
	FromDate    time.Time  `queryParam:"style=form,explode=true,name=FromDate"`
	ToDate      *time.Time `queryParam:"style=form,explode=true,name=ToDate"`
	Type        *string    `queryParam:"style=form,explode=true,name=Type"`
}

type GetActivePayInstructionsReportOutputHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type GetActivePayInstructionsReportOutputRequest struct {
	QueryParams GetActivePayInstructionsReportOutputQueryParams
	Headers     GetActivePayInstructionsReportOutputHeaders
}

type GetActivePayInstructionsReportOutputResponse struct {
	ContentType                                                        string
	ErrorModel                                                         *shared.ErrorModel
	GetActivePayInstructionsReportOutput200ApplicationJSONBinaryString []byte
	StatusCode                                                         int64
}
