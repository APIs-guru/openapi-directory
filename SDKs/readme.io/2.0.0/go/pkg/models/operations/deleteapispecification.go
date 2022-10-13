package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteAPISpecificationPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteAPISpecificationSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=http,subtype=basic"`
}

type DeleteAPISpecificationRequest struct {
	PathParams DeleteAPISpecificationPathParams
	Security   DeleteAPISpecificationSecurity
}

type DeleteAPISpecificationResponse struct {
	ContentType string
	StatusCode  int64
}
