package operations

import (
"openapi/pkg/models/shared")

type ServicePrincipalsListPasswordCredentialsPathParams struct {
    ObjectID string `pathParam:"style=simple,explode=false,name=objectId"`
    TenantID string `pathParam:"style=simple,explode=false,name=tenantID"`
    
}

type ServicePrincipalsListPasswordCredentialsQueryParams struct {
    APIVersion string `queryParam:"style=form,explode=true,name=api-version"`
    
}

type ServicePrincipalsListPasswordCredentialsRequest struct {
    PathParams ServicePrincipalsListPasswordCredentialsPathParams 
    QueryParams ServicePrincipalsListPasswordCredentialsQueryParams 
    
}

type ServicePrincipalsListPasswordCredentialsResponse struct {
    ContentType string 
    GraphError *shared.GraphError 
    PasswordCredentialListResult *shared.PasswordCredentialListResult 
    StatusCode int64 
    
}

