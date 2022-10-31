package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetPayslip3ReportOutputQueryParams struct {
	EmployeeCodes          *string    `queryParam:"style=form,explode=true,name=EmployeeCodes"`
	EmployerKey            string     `queryParam:"style=form,explode=true,name=EmployerKey"`
	MaxIndex               *string    `queryParam:"style=form,explode=true,name=MaxIndex"`
	PayScheduleKey         string     `queryParam:"style=form,explode=true,name=PayScheduleKey"`
	PaymentDate            *time.Time `queryParam:"style=form,explode=true,name=PaymentDate"`
	StartIndex             *string    `queryParam:"style=form,explode=true,name=StartIndex"`
	TaxYear                string     `queryParam:"style=form,explode=true,name=TaxYear"`
	TransformDefinitionKey *string    `queryParam:"style=form,explode=true,name=TransformDefinitionKey"`
}

type GetPayslip3ReportOutputHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type GetPayslip3ReportOutputRequest struct {
	QueryParams GetPayslip3ReportOutputQueryParams
	Headers     GetPayslip3ReportOutputHeaders
}

type GetPayslip3ReportOutputResponse struct {
	ContentType                                           string
	ErrorModel                                            *shared.ErrorModel
	GetPayslip3ReportOutput200ApplicationJSONBinaryString []byte
	StatusCode                                            int64
}
