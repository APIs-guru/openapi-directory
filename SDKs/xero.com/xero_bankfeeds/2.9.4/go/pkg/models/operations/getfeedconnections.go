package operations

import (
"openapi/pkg/models/shared")

type GetFeedConnectionsQueryParams struct {
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
    
}

type GetFeedConnectionsHeaders struct {
    XeroTenantID string `header:"style=simple,explode=false,name=Xero-Tenant-Id"`
    
}

type GetFeedConnectionsSecurity struct {
    OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
    
}

type GetFeedConnectionsRequest struct {
    QueryParams GetFeedConnectionsQueryParams 
    Headers GetFeedConnectionsHeaders 
    Security GetFeedConnectionsSecurity 
    
}

type GetFeedConnectionsResponse struct {
    ContentType string 
    FeedConnections *shared.FeedConnections 
    StatusCode int64 
    
}

