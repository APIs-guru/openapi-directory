package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteFeedConnectionsHeaders struct {
	XeroTenantID string `header:"name=Xero-Tenant-Id"`
}

type DeleteFeedConnectionsSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type DeleteFeedConnectionsRequest struct {
	Headers  DeleteFeedConnectionsHeaders
	Request  shared.FeedConnections `request:"mediaType=application/json"`
	Security DeleteFeedConnectionsSecurity
}

type DeleteFeedConnectionsResponse struct {
	ContentType     string
	FeedConnections *shared.FeedConnections
	StatusCode      int64
}
