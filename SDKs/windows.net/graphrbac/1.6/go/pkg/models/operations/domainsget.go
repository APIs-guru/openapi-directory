package operations



type DomainsGetPathParams struct {
    DomainName string `pathParam:"style=simple,explode=false,name=domainName"`
    TenantID string `pathParam:"style=simple,explode=false,name=tenantID"`
    
}

type DomainsGetQueryParams struct {
    APIVersion string `queryParam:"style=form,explode=true,name=api-version"`
    
}

type DomainsGetRequest struct {
    PathParams DomainsGetPathParams 
    QueryParams DomainsGetQueryParams 
    
}

type DomainsGetResponse struct {
    ContentType string 
    Domain map[string]map[string]interface{} 
    StatusCode int64 
    
}

