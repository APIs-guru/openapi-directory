package operations

import (
"openapi/pkg/models/shared")

type GetAccountCredentialsQueryParams struct {
    Search *string `queryParam:"style=form,explode=true,name=search"`
    
}

type GetAccountCredentialsSecurity struct {
    BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
    
}

type GetAccountCredentialsRequest struct {
    QueryParams GetAccountCredentialsQueryParams 
    Security GetAccountCredentialsSecurity 
    
}

type GetAccountCredentialsResponse struct {
    ContentType string 
    Credentials []shared.Credential 
    StatusCode int64 
    
}

