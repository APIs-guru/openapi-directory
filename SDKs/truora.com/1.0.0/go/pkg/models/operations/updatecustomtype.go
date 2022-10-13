package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateCustomTypeSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type UpdateCustomTypeRequest struct {
	Request  shared.CreateConfigInput `request:"mediaType=application/x-www-form-urlencoded"`
	Security UpdateCustomTypeSecurity
}

type UpdateCustomTypeResponse struct {
	ContentType string
	StatusCode  int64
}
