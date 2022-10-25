package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateSyncDocumentServers = []string{
	"https://preview.twilio.com",
}

type UpdateSyncDocumentPathParams struct {
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateSyncDocumentHeaders struct {
	IfMatch *string `header:"name=If-Match"`
}

type UpdateSyncDocumentUpdateSyncDocumentRequest struct {
	Data interface{} `form:"name=Data"`
}

type UpdateSyncDocumentSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateSyncDocumentRequest struct {
	ServerURL  *string
	PathParams UpdateSyncDocumentPathParams
	Headers    UpdateSyncDocumentHeaders
	Request    *UpdateSyncDocumentUpdateSyncDocumentRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateSyncDocumentSecurity
}

type UpdateSyncDocumentResponse struct {
	ContentType                string
	StatusCode                 int64
	PreviewSyncServiceDocument *shared.PreviewSyncServiceDocument
}
