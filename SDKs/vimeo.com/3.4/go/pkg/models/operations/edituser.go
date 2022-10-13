package operations

import (
	"openapi/pkg/models/shared"
)

type EditUserPathParams struct {
	UserID float64 `pathParam:"style=simple,explode=false,name=user_id"`
}

type EditUserRequestBodyVideosPrivacyCommentsEnum string

const (
	EditUserRequestBodyVideosPrivacyCommentsEnumAnybody  EditUserRequestBodyVideosPrivacyCommentsEnum = "anybody"
	EditUserRequestBodyVideosPrivacyCommentsEnumContacts EditUserRequestBodyVideosPrivacyCommentsEnum = "contacts"
	EditUserRequestBodyVideosPrivacyCommentsEnumNobody   EditUserRequestBodyVideosPrivacyCommentsEnum = "nobody"
)

type EditUserRequestBodyVideosPrivacyEmbedEnum string

const (
	EditUserRequestBodyVideosPrivacyEmbedEnumPrivate   EditUserRequestBodyVideosPrivacyEmbedEnum = "private"
	EditUserRequestBodyVideosPrivacyEmbedEnumPublic    EditUserRequestBodyVideosPrivacyEmbedEnum = "public"
	EditUserRequestBodyVideosPrivacyEmbedEnumWhitelist EditUserRequestBodyVideosPrivacyEmbedEnum = "whitelist"
)

type EditUserRequestBodyVideosPrivacyViewEnum string

const (
	EditUserRequestBodyVideosPrivacyViewEnumAnybody  EditUserRequestBodyVideosPrivacyViewEnum = "anybody"
	EditUserRequestBodyVideosPrivacyViewEnumContacts EditUserRequestBodyVideosPrivacyViewEnum = "contacts"
	EditUserRequestBodyVideosPrivacyViewEnumDisable  EditUserRequestBodyVideosPrivacyViewEnum = "disable"
	EditUserRequestBodyVideosPrivacyViewEnumNobody   EditUserRequestBodyVideosPrivacyViewEnum = "nobody"
	EditUserRequestBodyVideosPrivacyViewEnumPassword EditUserRequestBodyVideosPrivacyViewEnum = "password"
	EditUserRequestBodyVideosPrivacyViewEnumUnlisted EditUserRequestBodyVideosPrivacyViewEnum = "unlisted"
	EditUserRequestBodyVideosPrivacyViewEnumUsers    EditUserRequestBodyVideosPrivacyViewEnum = "users"
)

type EditUserRequestBodyVideosPrivacy struct {
	Add      *bool                                         `json:"add"`
	Comments *EditUserRequestBodyVideosPrivacyCommentsEnum `json:"comments"`
	Download *bool                                         `json:"download"`
	Embed    *EditUserRequestBodyVideosPrivacyEmbedEnum    `json:"embed"`
	View     *EditUserRequestBodyVideosPrivacyViewEnum     `json:"view"`
}

type EditUserRequestBodyVideos struct {
	Privacy *EditUserRequestBodyVideosPrivacy `json:"privacy"`
}

type EditUserRequestBody struct {
	Bio           *string                    `json:"bio"`
	ContentFilter []string                   `json:"content_filter"`
	Link          *string                    `json:"link"`
	Location      *string                    `json:"location"`
	Name          *string                    `json:"name"`
	Password      *string                    `json:"password"`
	Videos        *EditUserRequestBodyVideos `json:"videos"`
}

type EditUserRequest struct {
	PathParams EditUserPathParams
	Request    *EditUserRequestBody `request:"mediaType=application/vnd.vimeo.user+json"`
}

type EditUserResponse struct {
	ContentType string
	StatusCode  int64
	User        *shared.User
}
