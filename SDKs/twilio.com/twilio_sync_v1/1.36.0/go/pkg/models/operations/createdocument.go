package operations

import (
	"openapi/pkg/models/shared"
)

var CreateDocumentServers = []string{
	"https://sync.twilio.com",
}

type CreateDocumentPathParams struct {
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type CreateDocumentCreateDocumentRequest struct {
	Data       *interface{} `form:"name=Data"`
	TTL        *int64       `form:"name=Ttl"`
	UniqueName *string      `form:"name=UniqueName"`
}

type CreateDocumentSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateDocumentRequest struct {
	ServerURL  *string
	PathParams CreateDocumentPathParams
	Request    *CreateDocumentCreateDocumentRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateDocumentSecurity
}

type CreateDocumentResponse struct {
	ContentType           string
	StatusCode            int64
	SyncV1ServiceDocument *shared.SyncV1ServiceDocument
}
