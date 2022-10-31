package operations

import (
	"openapi/pkg/models/shared"
)

type CreateCheckTruoraPriorityEnum string

const (
	CreateCheckTruoraPriorityEnumLow    CreateCheckTruoraPriorityEnum = "low"
	CreateCheckTruoraPriorityEnumMedium CreateCheckTruoraPriorityEnum = "medium"
	CreateCheckTruoraPriorityEnumHigh   CreateCheckTruoraPriorityEnum = "high"
)

type CreateCheckHeaders struct {
	TruoraPriority *CreateCheckTruoraPriorityEnum `header:"style=simple,explode=false,name=Truora-Priority"`
}

type CreateCheckSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type CreateCheckRequest struct {
	Headers  CreateCheckHeaders
	Request  shared.CreateCheckInput `request:"mediaType=application/x-www-form-urlencoded"`
	Security CreateCheckSecurity
}

type CreateCheckResponse struct {
	CheckOutput *shared.CheckOutput
	ContentType string
	Error       *interface{}
	StatusCode  int64
}
