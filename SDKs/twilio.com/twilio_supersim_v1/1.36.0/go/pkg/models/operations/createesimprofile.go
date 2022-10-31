package operations

import (
	"openapi/pkg/models/shared"
)

var CreateEsimProfileServers = []string{
	"https://supersim.twilio.com",
}

type CreateEsimProfileCreateEsimProfileRequestCallbackMethodEnum string

const (
	CreateEsimProfileCreateEsimProfileRequestCallbackMethodEnumHead   CreateEsimProfileCreateEsimProfileRequestCallbackMethodEnum = "HEAD"
	CreateEsimProfileCreateEsimProfileRequestCallbackMethodEnumGet    CreateEsimProfileCreateEsimProfileRequestCallbackMethodEnum = "GET"
	CreateEsimProfileCreateEsimProfileRequestCallbackMethodEnumPost   CreateEsimProfileCreateEsimProfileRequestCallbackMethodEnum = "POST"
	CreateEsimProfileCreateEsimProfileRequestCallbackMethodEnumPatch  CreateEsimProfileCreateEsimProfileRequestCallbackMethodEnum = "PATCH"
	CreateEsimProfileCreateEsimProfileRequestCallbackMethodEnumPut    CreateEsimProfileCreateEsimProfileRequestCallbackMethodEnum = "PUT"
	CreateEsimProfileCreateEsimProfileRequestCallbackMethodEnumDelete CreateEsimProfileCreateEsimProfileRequestCallbackMethodEnum = "DELETE"
)

type CreateEsimProfileCreateEsimProfileRequest struct {
	CallbackMethod *CreateEsimProfileCreateEsimProfileRequestCallbackMethodEnum `form:"name=CallbackMethod"`
	CallbackURL    *string                                                      `form:"name=CallbackUrl"`
	Eid            *string                                                      `form:"name=Eid"`
}

type CreateEsimProfileSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateEsimProfileRequest struct {
	ServerURL *string
	Request   *CreateEsimProfileCreateEsimProfileRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security  CreateEsimProfileSecurity
}

type CreateEsimProfileResponse struct {
	ContentType           string
	StatusCode            int64
	SupersimV1EsimProfile *shared.SupersimV1EsimProfile
}
