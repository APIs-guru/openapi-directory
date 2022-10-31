package operations

import (
"openapi/pkg/models/shared")


type ClientAuthRequestBodyGrantTypeEnum string

const (
    ClientAuthRequestBodyGrantTypeEnumClientCredentials ClientAuthRequestBodyGrantTypeEnum = "client_credentials"
)


type ClientAuthRequestBody struct {
    GrantType ClientAuthRequestBodyGrantTypeEnum `json:"grant_type"`
    Scope string `json:"scope"`
    
}

type ClientAuthRequest struct {
    Request ClientAuthRequestBody `request:"mediaType=application/vnd.vimeo.auth+json"`
    
}

type ClientAuthResponse struct {
    ContentType string 
    StatusCode int64 
    Auth *shared.Auth 
    Error *shared.Error 
    
}

