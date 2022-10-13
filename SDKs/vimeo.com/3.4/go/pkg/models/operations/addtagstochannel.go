package operations

import (
	"openapi/pkg/models/shared"
)

type AddTagsToChannelPathParams struct {
	ChannelID float64 `pathParam:"style=simple,explode=false,name=channel_id"`
}

type AddTagsToChannelRequestBody struct {
	Tag []string `json:"tag"`
}

type AddTagsToChannelSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type AddTagsToChannelRequest struct {
	PathParams AddTagsToChannelPathParams
	Request    AddTagsToChannelRequestBody `request:"mediaType=application/vnd.vimeo.tag+json"`
	Security   AddTagsToChannelSecurity
}

type AddTagsToChannelResponse struct {
	ContentType string
	StatusCode  int64
	Error       *shared.Error
	LegacyError *shared.LegacyError
	Tags        []shared.Tag
}
