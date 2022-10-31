package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateItemModifierListsSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type UpdateItemModifierListsRequest struct {
	Request  shared.UpdateItemModifierListsRequest `request:"mediaType=application/json"`
	Security UpdateItemModifierListsSecurity
}

type UpdateItemModifierListsResponse struct {
	ContentType                     string
	StatusCode                      int64
	UpdateItemModifierListsResponse *shared.UpdateItemModifierListsResponse
}
