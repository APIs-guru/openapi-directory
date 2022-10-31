package operations

import (
"openapi/pkg/models/shared")

type CreateFeedConnectionsHeaders struct {
    XeroTenantID string `header:"style=simple,explode=false,name=Xero-Tenant-Id"`
    
}

type CreateFeedConnectionsSecurity struct {
    OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
    
}

type CreateFeedConnectionsRequest struct {
    Headers CreateFeedConnectionsHeaders 
    Request shared.FeedConnections `request:"mediaType=application/json"`
    Security CreateFeedConnectionsSecurity 
    
}

type CreateFeedConnectionsResponse struct {
    ContentType string 
    Error *shared.Error 
    FeedConnections *shared.FeedConnections 
    StatusCode int64 
    
}

