package operations

import (
"openapi/pkg/models/shared")


type ExchangeAuthCodeRequestBodyGrantTypeEnum string

const (
    ExchangeAuthCodeRequestBodyGrantTypeEnumAuthorizationCode ExchangeAuthCodeRequestBodyGrantTypeEnum = "authorization_code"
)


type ExchangeAuthCodeRequestBody struct {
    Code string `json:"code"`
    GrantType ExchangeAuthCodeRequestBodyGrantTypeEnum `json:"grant_type"`
    RedirectURI string `json:"redirect_uri"`
    
}

type ExchangeAuthCodeRequest struct {
    Request ExchangeAuthCodeRequestBody `request:"mediaType=application/vnd.vimeo.auth+json"`
    
}

type ExchangeAuthCodeResponse struct {
    ContentType string 
    StatusCode int64 
    Auth *shared.Auth 
    AuthError *shared.AuthError 
    
}

