package operations

import (
	"openapi/pkg/models/shared"
)

type PostAPISocialNumberQueryParams struct {
	IDType shared.IDTypeEnum `queryParam:"style=form,explode=true,name=idType"`
}

type PostAPISocialNumberHeaders struct {
	XAPIKey *string `header:"name=X-Api-Key"`
}

type PostAPISocialNumberRequests struct {
	NumberValidation  *shared.NumberValidation `request:"mediaType=application/*+json"`
	NumberValidation1 *shared.NumberValidation `request:"mediaType=application/json"`
	NumberValidation2 *shared.NumberValidation `request:"mediaType=application/json-patch+json"`
	NumberValidation3 *shared.NumberValidation `request:"mediaType=text/json"`
}

type PostAPISocialNumberRequest struct {
	QueryParams PostAPISocialNumberQueryParams
	Headers     PostAPISocialNumberHeaders
	Request     PostAPISocialNumberRequests
}

type PostAPISocialNumberResponse struct {
	ContentType string
	StatusCode  int64
}
