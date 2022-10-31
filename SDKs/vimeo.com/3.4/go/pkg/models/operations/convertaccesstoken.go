package operations

import (
	"openapi/pkg/models/shared"
)

type ConvertAccessTokenRequestBodyGrantTypeEnum string

const (
	ConvertAccessTokenRequestBodyGrantTypeEnumVimeoOauth1 ConvertAccessTokenRequestBodyGrantTypeEnum = "vimeo_oauth1"
)

type ConvertAccessTokenRequestBody struct {
	GrantType   ConvertAccessTokenRequestBodyGrantTypeEnum `json:"grant_type"`
	Token       string                                     `json:"token"`
	TokenSecret string                                     `json:"token_secret"`
}

type ConvertAccessTokenRequest struct {
	Request ConvertAccessTokenRequestBody `request:"mediaType=application/vnd.vimeo.auth+json"`
}

type ConvertAccessTokenResponse struct {
	ContentType string
	StatusCode  int64
	Auth        *shared.Auth
	AuthError   *shared.AuthError
}
