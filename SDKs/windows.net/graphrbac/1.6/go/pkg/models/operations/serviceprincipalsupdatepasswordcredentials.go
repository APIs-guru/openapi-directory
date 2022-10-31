package operations

import (
"openapi/pkg/models/shared")

type ServicePrincipalsUpdatePasswordCredentialsPathParams struct {
    ObjectID string `pathParam:"style=simple,explode=false,name=objectId"`
    TenantID string `pathParam:"style=simple,explode=false,name=tenantID"`
    
}

type ServicePrincipalsUpdatePasswordCredentialsQueryParams struct {
    APIVersion string `queryParam:"style=form,explode=true,name=api-version"`
    
}

type ServicePrincipalsUpdatePasswordCredentialsRequests struct {
    PasswordCredentialsUpdateParameters *shared.PasswordCredentialsUpdateParameters `request:"mediaType=application/json"`
    PasswordCredentialsUpdateParameters1 *shared.PasswordCredentialsUpdateParameters `request:"mediaType=text/json"`
    
}

type ServicePrincipalsUpdatePasswordCredentialsRequest struct {
    PathParams ServicePrincipalsUpdatePasswordCredentialsPathParams 
    QueryParams ServicePrincipalsUpdatePasswordCredentialsQueryParams 
    Request ServicePrincipalsUpdatePasswordCredentialsRequests 
    
}

type ServicePrincipalsUpdatePasswordCredentialsResponse struct {
    ContentType string 
    GraphError *shared.GraphError 
    StatusCode int64 
    
}

