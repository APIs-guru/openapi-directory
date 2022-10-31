package operations

import (
"openapi/pkg/models/shared")


type GenerateTokenV2RequestBodyGrantTypeEnum string

const (
    GenerateTokenV2RequestBodyGrantTypeEnumUrnIetfParamsOauthGrantTypeJwtBearer GenerateTokenV2RequestBodyGrantTypeEnum = "urn:ietf:params:oauth:grant-type:jwt-bearer"
GenerateTokenV2RequestBodyGrantTypeEnumRefreshToken GenerateTokenV2RequestBodyGrantTypeEnum = "refresh_token"
)


type GenerateTokenV2RequestBody struct {
    Assertion *string `form:"name=assertion"`
    GrantType *GenerateTokenV2RequestBodyGrantTypeEnum `form:"name=grant_type"`
    RefreshToken *string `form:"name=refresh_token"`
    Scope *string `form:"name=scope"`
    ValidFor *int32 `form:"name=valid_for"`
    
}

type GenerateTokenV2Request struct {
    Request *GenerateTokenV2RequestBody `request:"mediaType=application/x-www-form-urlencoded"`
    
}

type GenerateTokenV2Response struct {
    ContentType string 
    GenerateAccessTokenResponse *shared.GenerateAccessTokenResponse 
    StatusCode int64 
    
}

