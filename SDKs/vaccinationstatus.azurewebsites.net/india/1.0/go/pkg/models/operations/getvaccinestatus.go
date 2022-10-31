package operations

import (
	"openapi/pkg/models/shared"
)

type GetVaccineStatusHeaders struct {
	Accept        string  `header:"style=simple,explode=false,name=Accept"`
	Authorization string  `header:"style=simple,explode=false,name=Authorization"`
	ContentType   string  `header:"style=simple,explode=false,name=Content-Type"`
	CowinAPIKey   *string `header:"style=simple,explode=false,name=cowinApiKey"`
}

type GetVaccineStatusRequest struct {
	Headers GetVaccineStatusHeaders
	Request shared.VaccineStatusRequest `request:"mediaType=application/json"`
}

type GetVaccineStatusResponse struct {
	ContentType     string
	Problem         *shared.Problem
	StatusCode      int64
	VaccineResponse *shared.VaccineResponse
}
