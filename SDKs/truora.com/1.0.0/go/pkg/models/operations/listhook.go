package operations

import (
	"openapi/pkg/models/shared"
)

type ListHookSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type ListHookRequest struct {
	Security ListHookSecurity
}

type ListHookResponse struct {
	ContentType string
	HookOutput  *shared.HookOutput
	StatusCode  int64
}
