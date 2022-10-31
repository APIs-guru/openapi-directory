package operations

import (
"openapi/pkg/models/shared")

type DomainsListPathParams struct {
    TenantID string `pathParam:"style=simple,explode=false,name=tenantID"`
    
}

type DomainsListQueryParams struct {
    DollarFilter *string `queryParam:"style=form,explode=true,name=$filter"`
    APIVersion string `queryParam:"style=form,explode=true,name=api-version"`
    
}

type DomainsListRequest struct {
    PathParams DomainsListPathParams 
    QueryParams DomainsListQueryParams 
    
}

type DomainsListResponse struct {
    ContentType string 
    DomainListResult *shared.DomainListResult 
    StatusCode int64 
    
}

