package operations

import (
"openapi/pkg/models/shared")

type GetVideoPrivacyDomainsPathParams struct {
    VideoID float64 `pathParam:"style=simple,explode=false,name=video_id"`
    
}

type GetVideoPrivacyDomainsQueryParams struct {
    Page *float64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *float64 `queryParam:"style=form,explode=true,name=per_page"`
    
}

type GetVideoPrivacyDomainsRequest struct {
    PathParams GetVideoPrivacyDomainsPathParams 
    QueryParams GetVideoPrivacyDomainsQueryParams 
    
}

type GetVideoPrivacyDomainsResponse struct {
    ContentType string 
    StatusCode int64 
    Domains []shared.Domain 
    LegacyError *shared.LegacyError 
    
}

