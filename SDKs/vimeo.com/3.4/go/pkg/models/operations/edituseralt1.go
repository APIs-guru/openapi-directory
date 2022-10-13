package operations

import (
	"openapi/pkg/models/shared"
)

type EditUserAlt1RequestBodyVideosPrivacyCommentsEnum string

const (
	EditUserAlt1RequestBodyVideosPrivacyCommentsEnumAnybody  EditUserAlt1RequestBodyVideosPrivacyCommentsEnum = "anybody"
	EditUserAlt1RequestBodyVideosPrivacyCommentsEnumContacts EditUserAlt1RequestBodyVideosPrivacyCommentsEnum = "contacts"
	EditUserAlt1RequestBodyVideosPrivacyCommentsEnumNobody   EditUserAlt1RequestBodyVideosPrivacyCommentsEnum = "nobody"
)

type EditUserAlt1RequestBodyVideosPrivacyEmbedEnum string

const (
	EditUserAlt1RequestBodyVideosPrivacyEmbedEnumPrivate   EditUserAlt1RequestBodyVideosPrivacyEmbedEnum = "private"
	EditUserAlt1RequestBodyVideosPrivacyEmbedEnumPublic    EditUserAlt1RequestBodyVideosPrivacyEmbedEnum = "public"
	EditUserAlt1RequestBodyVideosPrivacyEmbedEnumWhitelist EditUserAlt1RequestBodyVideosPrivacyEmbedEnum = "whitelist"
)

type EditUserAlt1RequestBodyVideosPrivacyViewEnum string

const (
	EditUserAlt1RequestBodyVideosPrivacyViewEnumAnybody  EditUserAlt1RequestBodyVideosPrivacyViewEnum = "anybody"
	EditUserAlt1RequestBodyVideosPrivacyViewEnumContacts EditUserAlt1RequestBodyVideosPrivacyViewEnum = "contacts"
	EditUserAlt1RequestBodyVideosPrivacyViewEnumDisable  EditUserAlt1RequestBodyVideosPrivacyViewEnum = "disable"
	EditUserAlt1RequestBodyVideosPrivacyViewEnumNobody   EditUserAlt1RequestBodyVideosPrivacyViewEnum = "nobody"
	EditUserAlt1RequestBodyVideosPrivacyViewEnumPassword EditUserAlt1RequestBodyVideosPrivacyViewEnum = "password"
	EditUserAlt1RequestBodyVideosPrivacyViewEnumUnlisted EditUserAlt1RequestBodyVideosPrivacyViewEnum = "unlisted"
	EditUserAlt1RequestBodyVideosPrivacyViewEnumUsers    EditUserAlt1RequestBodyVideosPrivacyViewEnum = "users"
)

type EditUserAlt1RequestBodyVideosPrivacy struct {
	Add      *bool                                             `json:"add"`
	Comments *EditUserAlt1RequestBodyVideosPrivacyCommentsEnum `json:"comments"`
	Download *bool                                             `json:"download"`
	Embed    *EditUserAlt1RequestBodyVideosPrivacyEmbedEnum    `json:"embed"`
	View     *EditUserAlt1RequestBodyVideosPrivacyViewEnum     `json:"view"`
}

type EditUserAlt1RequestBodyVideos struct {
	Privacy *EditUserAlt1RequestBodyVideosPrivacy `json:"privacy"`
}

type EditUserAlt1RequestBody struct {
	Bio           *string                        `json:"bio"`
	ContentFilter []string                       `json:"content_filter"`
	Link          *string                        `json:"link"`
	Location      *string                        `json:"location"`
	Name          *string                        `json:"name"`
	Password      *string                        `json:"password"`
	Videos        *EditUserAlt1RequestBodyVideos `json:"videos"`
}

type EditUserAlt1Request struct {
	Request *EditUserAlt1RequestBody `request:"mediaType=application/vnd.vimeo.user+json"`
}

type EditUserAlt1Response struct {
	ContentType string
	StatusCode  int64
	User        *shared.User
}
