package operations

import (
"openapi/pkg/models/shared")

type RegisterDomainSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type RegisterDomainRequest struct {
    Request shared.RegisterDomainRequest `request:"mediaType=application/json"`
    Security RegisterDomainSecurity 
    
}

type RegisterDomainResponse struct {
    ContentType string 
    RegisterDomainResponse *shared.RegisterDomainResponse 
    StatusCode int64 
    
}

