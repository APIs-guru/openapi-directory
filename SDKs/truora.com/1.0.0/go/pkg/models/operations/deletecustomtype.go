package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteCustomTypeCountryEnum string

const (
	DeleteCustomTypeCountryEnumBr  DeleteCustomTypeCountryEnum = "BR"
	DeleteCustomTypeCountryEnumCl  DeleteCustomTypeCountryEnum = "CL"
	DeleteCustomTypeCountryEnumCo  DeleteCustomTypeCountryEnum = "CO"
	DeleteCustomTypeCountryEnumCr  DeleteCustomTypeCountryEnum = "CR"
	DeleteCustomTypeCountryEnumEc  DeleteCustomTypeCountryEnum = "EC"
	DeleteCustomTypeCountryEnumMx  DeleteCustomTypeCountryEnum = "MX"
	DeleteCustomTypeCountryEnumPe  DeleteCustomTypeCountryEnum = "PE"
	DeleteCustomTypeCountryEnumAll DeleteCustomTypeCountryEnum = "ALL"
)

type DeleteCustomTypeQueryParams struct {
	Country *DeleteCustomTypeCountryEnum `queryParam:"style=form,explode=true,name=country"`
	Type    string                       `queryParam:"style=form,explode=true,name=type"`
}

type DeleteCustomTypeSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type DeleteCustomTypeRequest struct {
	QueryParams DeleteCustomTypeQueryParams
	Security    DeleteCustomTypeSecurity
}

type DeleteCustomTypeResponse struct {
	ContentType string
	StatusCode  int64
}
