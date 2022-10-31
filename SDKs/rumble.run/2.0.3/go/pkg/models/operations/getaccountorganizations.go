package operations

import (
"openapi/pkg/models/shared")

type GetAccountOrganizationsQueryParams struct {
    Search *string `queryParam:"style=form,explode=true,name=search"`
    
}

type GetAccountOrganizationsSecurity struct {
    BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
    
}

type GetAccountOrganizationsRequest struct {
    QueryParams GetAccountOrganizationsQueryParams 
    Security GetAccountOrganizationsSecurity 
    
}

type GetAccountOrganizationsResponse struct {
    ContentType string 
    Organizations []shared.Organization 
    StatusCode int64 
    
}

