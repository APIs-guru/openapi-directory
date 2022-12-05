package operations

import (
	"openapi/pkg/models/shared"
)

type GetBeGreetingSecurity struct {
	APISecretKey shared.SchemeAPISecretKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetBeGreetingRequest struct {
	Security GetBeGreetingSecurity
}

type GetBeGreetingResponse struct {
	ContentType                        string
	StatusCode                         int64
	GetBeGreeting200ApplicationJSONAny *interface{}
	GetBeGreeting403ApplicationJSONAny *interface{}
	GetBeGreeting429ApplicationJSONAny *interface{}
	GetBeGreeting500ApplicationJSONAny *interface{}
}
