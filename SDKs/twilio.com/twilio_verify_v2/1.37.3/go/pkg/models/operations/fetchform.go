package operations

import (
	"openapi/pkg/models/shared"
)

var FetchFormServerList = []string{
	"https://verify.twilio.com",
}

type FetchFormPathParams struct {
	FormType shared.FormEnumFormTypesEnum `pathParam:"style=simple,explode=false,name=FormType"`
}

type FetchFormSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchFormRequest struct {
	ServerURL  *string
	PathParams FetchFormPathParams
	Security   FetchFormSecurity
}

type FetchFormResponse struct {
	ContentType  string
	StatusCode   int64
	VerifyV2Form *shared.VerifyV2Form
}
