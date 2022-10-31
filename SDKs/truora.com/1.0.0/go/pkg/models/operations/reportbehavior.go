package operations

import (
	"openapi/pkg/models/shared"
)

type ReportBehaviorSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type ReportBehaviorRequest struct {
	Request  shared.CreateBehaviorInput `request:"mediaType=application/x-www-form-urlencoded"`
	Security ReportBehaviorSecurity
}

type ReportBehaviorResponse struct {
	BehaviourOutput *shared.BehaviourOutput
	ContentType     string
	Errors          []interface{}
	StatusCode      int64
}
