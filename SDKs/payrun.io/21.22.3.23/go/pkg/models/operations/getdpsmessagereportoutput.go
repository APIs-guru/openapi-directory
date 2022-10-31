package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetDpsMessageReportOutputQueryParams struct {
	EmployerKey     string     `queryParam:"style=form,explode=true,name=EmployerKey"`
	FromDate        time.Time  `queryParam:"style=form,explode=true,name=FromDate"`
	MaxIndex        *string    `queryParam:"style=form,explode=true,name=MaxIndex"`
	MessageStatuses *string    `queryParam:"style=form,explode=true,name=MessageStatuses"`
	MessageTypes    *string    `queryParam:"style=form,explode=true,name=MessageTypes"`
	StartIndex      *string    `queryParam:"style=form,explode=true,name=StartIndex"`
	ToDate          *time.Time `queryParam:"style=form,explode=true,name=ToDate"`
}

type GetDpsMessageReportOutputHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type GetDpsMessageReportOutputRequest struct {
	QueryParams GetDpsMessageReportOutputQueryParams
	Headers     GetDpsMessageReportOutputHeaders
}

type GetDpsMessageReportOutputResponse struct {
	ContentType                                             string
	ErrorModel                                              *shared.ErrorModel
	GetDpsMessageReportOutput200ApplicationJSONBinaryString []byte
	StatusCode                                              int64
}
