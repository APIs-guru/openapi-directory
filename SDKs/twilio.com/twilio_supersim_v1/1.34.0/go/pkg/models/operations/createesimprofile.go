package operations

import (
	"openapi/pkg/models/shared"
)

var CreateEsimProfileServers = []string{
	"https://supersim.twilio.com",
}

type CreateEsimProfileRequestBodyCallbackMethodEnum string

const (
	CreateEsimProfileRequestBodyCallbackMethodEnumHead   CreateEsimProfileRequestBodyCallbackMethodEnum = "HEAD"
	CreateEsimProfileRequestBodyCallbackMethodEnumGet    CreateEsimProfileRequestBodyCallbackMethodEnum = "GET"
	CreateEsimProfileRequestBodyCallbackMethodEnumPost   CreateEsimProfileRequestBodyCallbackMethodEnum = "POST"
	CreateEsimProfileRequestBodyCallbackMethodEnumPatch  CreateEsimProfileRequestBodyCallbackMethodEnum = "PATCH"
	CreateEsimProfileRequestBodyCallbackMethodEnumPut    CreateEsimProfileRequestBodyCallbackMethodEnum = "PUT"
	CreateEsimProfileRequestBodyCallbackMethodEnumDelete CreateEsimProfileRequestBodyCallbackMethodEnum = "DELETE"
)

type CreateEsimProfileRequestBodyCreateEsimProfileRequest struct {
	CallbackMethod *CreateEsimProfileRequestBodyCallbackMethodEnum `form:"name=CallbackMethod"`
	CallbackURL    *string                                         `form:"name=CallbackUrl"`
	Eid            *string                                         `form:"name=Eid"`
}

type CreateEsimProfileSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateEsimProfileRequest struct {
	ServerURL *string
	Request   *CreateEsimProfileRequestBodyCreateEsimProfileRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security  CreateEsimProfileSecurity
}

type CreateEsimProfileResponse struct {
	ContentType           string
	StatusCode            int64
	SupersimV1EsimProfile *shared.SupersimV1EsimProfile
}
