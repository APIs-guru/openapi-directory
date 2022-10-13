package operations

import (
	"openapi/pkg/models/shared"
)

type GetVaccineStatusHeaders struct {
	Accept        string  `header:"name=Accept"`
	Authorization string  `header:"name=Authorization"`
	ContentType   string  `header:"name=Content-Type"`
	CowinAPIKey   *string `header:"name=cowinApiKey"`
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
