package operations

import (
	"openapi/pkg/models/shared"
)

var CreateVariableServers = []string{
	"https://serverless.twilio.com",
}

type CreateVariablePathParams struct {
	EnvironmentSid string `pathParam:"style=simple,explode=false,name=EnvironmentSid"`
	ServiceSid     string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type CreateVariableRequestBodyCreateVariableRequest struct {
	Key   string `form:"name=Key"`
	Value string `form:"name=Value"`
}

type CreateVariableSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateVariableRequest struct {
	ServerURL  *string
	PathParams CreateVariablePathParams
	Request    *CreateVariableRequestBodyCreateVariableRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateVariableSecurity
}

type CreateVariableResponse struct {
	ContentType                            string
	StatusCode                             int64
	ServerlessV1ServiceEnvironmentVariable *shared.ServerlessV1ServiceEnvironmentVariable
}
