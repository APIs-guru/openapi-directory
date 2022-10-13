package operations

import (
	"openapi/pkg/models/shared"
)

type CreateChannelRequestBodyPrivacyEnum string

const (
	CreateChannelRequestBodyPrivacyEnumAnybody    CreateChannelRequestBodyPrivacyEnum = "anybody"
	CreateChannelRequestBodyPrivacyEnumModerators CreateChannelRequestBodyPrivacyEnum = "moderators"
	CreateChannelRequestBodyPrivacyEnumUser       CreateChannelRequestBodyPrivacyEnum = "user"
)

type CreateChannelRequestBody struct {
	Description *string                             `json:"description"`
	Link        *string                             `json:"link"`
	Name        string                              `json:"name"`
	Privacy     CreateChannelRequestBodyPrivacyEnum `json:"privacy"`
}

type CreateChannelSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type CreateChannelRequest struct {
	Request  CreateChannelRequestBody `request:"mediaType=application/vnd.vimeo.channel+json"`
	Security CreateChannelSecurity
}

type CreateChannelResponse struct {
	ContentType string
	StatusCode  int64
	Channel     *shared.Channel
	LegacyError *shared.LegacyError
}
