package operations

import (
"openapi/pkg/models/shared")

type UpdateAliasQueryParams struct {
    AliasName string `queryParam:"style=form,explode=true,name=aliasName"`
    DomainName *string `queryParam:"style=form,explode=true,name=domainName"`
    
}

type UpdateAliasSecurity struct {
    APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
    
}

type UpdateAliasRequest struct {
    QueryParams UpdateAliasQueryParams 
    Request shared.CreateAliasModel `request:"mediaType=application/json"`
    Security UpdateAliasSecurity 
    
}

type UpdateAliasResponse struct {
    ContentType string 
    StatusCode int64 
    
}

