package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetPayDashboardPayslipReportOuputQueryParams struct {
	EmployeeCodes          *string    `queryParam:"style=form,explode=true,name=EmployeeCodes"`
	EmployerKey            string     `queryParam:"style=form,explode=true,name=EmployerKey"`
	MaxIndex               *string    `queryParam:"style=form,explode=true,name=MaxIndex"`
	PayScheduleKey         string     `queryParam:"style=form,explode=true,name=PayScheduleKey"`
	PaymentDate            *time.Time `queryParam:"style=form,explode=true,name=PaymentDate"`
	PublicationDate        time.Time  `queryParam:"style=form,explode=true,name=PublicationDate"`
	StartIndex             *string    `queryParam:"style=form,explode=true,name=StartIndex"`
	TaxYear                string     `queryParam:"style=form,explode=true,name=TaxYear"`
	TransformDefinitionKey *string    `queryParam:"style=form,explode=true,name=TransformDefinitionKey"`
}

type GetPayDashboardPayslipReportOuputHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type GetPayDashboardPayslipReportOuputRequest struct {
	QueryParams GetPayDashboardPayslipReportOuputQueryParams
	Headers     GetPayDashboardPayslipReportOuputHeaders
}

type GetPayDashboardPayslipReportOuputResponse struct {
	ContentType                                                     string
	ErrorModel                                                      *shared.ErrorModel
	GetPayDashboardPayslipReportOuput200ApplicationJSONBinaryString []byte
	StatusCode                                                      int64
}
