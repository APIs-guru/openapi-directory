package operations

import (
	"openapi/pkg/models/shared"
)

type GetAllFacilitiesAcceptEnum string

const (
	GetAllFacilitiesAcceptEnumApplicationGeoPlusJSON    GetAllFacilitiesAcceptEnum = "application/geo+json"
	GetAllFacilitiesAcceptEnumApplicationVndGeoPlusJSON GetAllFacilitiesAcceptEnum = "application/vnd.geo+json"
	GetAllFacilitiesAcceptEnumTextCsv                   GetAllFacilitiesAcceptEnum = "text/csv"
)

type GetAllFacilitiesHeaders struct {
	Accept GetAllFacilitiesAcceptEnum `header:"style=simple,explode=false,name=Accept"`
}

type GetAllFacilitiesSecurity struct {
	Apikey shared.SchemeApikey `security:"scheme,type=apiKey,subtype=header"`
}

type GetAllFacilitiesRequest struct {
	Headers  GetAllFacilitiesHeaders
	Security GetAllFacilitiesSecurity
}

type GetAllFacilitiesResponse struct {
	APIError                         *shared.APIError
	ContentType                      string
	GenericError                     *shared.GenericError
	GeoFacilitiesResponse            *shared.GeoFacilitiesResponse
	StatusCode                       int64
	GetAllFacilities200TextCsvString *string
}
