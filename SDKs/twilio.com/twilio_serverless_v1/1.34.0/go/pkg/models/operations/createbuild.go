package operations

import (
	"openapi/pkg/models/shared"
)

var CreateBuildServers = []string{
	"https://serverless.twilio.com",
}

type CreateBuildPathParams struct {
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type CreateBuildRequestBodyCreateBuildRequest struct {
	AssetVersions    []string `form:"name=AssetVersions"`
	Dependencies     *string  `form:"name=Dependencies"`
	FunctionVersions []string `form:"name=FunctionVersions"`
	Runtime          *string  `form:"name=Runtime"`
}

type CreateBuildSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateBuildRequest struct {
	ServerURL  *string
	PathParams CreateBuildPathParams
	Request    *CreateBuildRequestBodyCreateBuildRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateBuildSecurity
}

type CreateBuildResponse struct {
	ContentType              string
	StatusCode               int64
	ServerlessV1ServiceBuild *shared.ServerlessV1ServiceBuild
}
