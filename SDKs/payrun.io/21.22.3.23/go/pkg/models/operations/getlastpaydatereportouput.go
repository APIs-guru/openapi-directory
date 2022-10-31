package operations

import (
	"openapi/pkg/models/shared"
)

type GetLastPayDateReportOuputQueryParams struct {
	EmployeeKey string `queryParam:"style=form,explode=true,name=EmployeeKey"`
	EmployerKey string `queryParam:"style=form,explode=true,name=EmployerKey"`
}

type GetLastPayDateReportOuputHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type GetLastPayDateReportOuputRequest struct {
	QueryParams GetLastPayDateReportOuputQueryParams
	Headers     GetLastPayDateReportOuputHeaders
}

type GetLastPayDateReportOuputResponse struct {
	ContentType                                             string
	ErrorModel                                              *shared.ErrorModel
	GetLastPayDateReportOuput200ApplicationJSONBinaryString []byte
	StatusCode                                              int64
}
