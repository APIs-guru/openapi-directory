package operations

import (
	"openapi/pkg/models/shared"
)

type GetFeedConnectionPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetFeedConnectionHeaders struct {
	XeroTenantID string `header:"style=simple,explode=false,name=Xero-Tenant-Id"`
}

type GetFeedConnectionSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type GetFeedConnectionRequest struct {
	PathParams GetFeedConnectionPathParams
	Headers    GetFeedConnectionHeaders
	Security   GetFeedConnectionSecurity
}

type GetFeedConnectionResponse struct {
	ContentType    string
	FeedConnection *shared.FeedConnection
	StatusCode     int64
}
