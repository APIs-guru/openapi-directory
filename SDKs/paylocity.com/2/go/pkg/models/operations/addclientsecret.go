package operations

import (
"openapi/pkg/models/shared")

type AddClientSecretSecurity struct {
    PaylocityAuth shared.SchemePaylocityAuth `security:"scheme,type=oauth2"`
    
}

type AddClientSecretRequest struct {
    Request shared.AddClientSecret `request:"mediaType=application/json"`
    Security AddClientSecretSecurity 
    
}

type AddClientSecretResponse struct {
    ContentType string 
    StatusCode int64 
    ClientCredentialsResponses []shared.ClientCredentialsResponse 
    Errors []shared.Error 
    
}

