package operations

import (
"openapi/pkg/models/shared")

type ApplicationsListPasswordCredentialsPathParams struct {
    ApplicationObjectID string `pathParam:"style=simple,explode=false,name=applicationObjectId"`
    TenantID string `pathParam:"style=simple,explode=false,name=tenantID"`
    
}

type ApplicationsListPasswordCredentialsQueryParams struct {
    APIVersion string `queryParam:"style=form,explode=true,name=api-version"`
    
}

type ApplicationsListPasswordCredentialsRequest struct {
    PathParams ApplicationsListPasswordCredentialsPathParams 
    QueryParams ApplicationsListPasswordCredentialsQueryParams 
    
}

type ApplicationsListPasswordCredentialsResponse struct {
    ContentType string 
    GraphError *shared.GraphError 
    PasswordCredentialListResult *shared.PasswordCredentialListResult 
    StatusCode int64 
    
}

