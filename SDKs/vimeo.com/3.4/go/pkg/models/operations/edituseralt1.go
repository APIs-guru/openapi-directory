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
	Add      *bool                                             `json:"add,omitempty"`
	Comments *EditUserAlt1RequestBodyVideosPrivacyCommentsEnum `json:"comments,omitempty"`
	Download *bool                                             `json:"download,omitempty"`
	Embed    *EditUserAlt1RequestBodyVideosPrivacyEmbedEnum    `json:"embed,omitempty"`
	View     *EditUserAlt1RequestBodyVideosPrivacyViewEnum     `json:"view,omitempty"`
}

type EditUserAlt1RequestBodyVideos struct {
	Privacy *EditUserAlt1RequestBodyVideosPrivacy `json:"privacy,omitempty"`
}

type EditUserAlt1RequestBody struct {
	Bio           *string                        `json:"bio,omitempty"`
	ContentFilter []string                       `json:"content_filter,omitempty"`
	Link          *string                        `json:"link,omitempty"`
	Location      *string                        `json:"location,omitempty"`
	Name          *string                        `json:"name,omitempty"`
	Password      *string                        `json:"password,omitempty"`
	Videos        *EditUserAlt1RequestBodyVideos `json:"videos,omitempty"`
}

type EditUserAlt1Request struct {
	Request *EditUserAlt1RequestBody `request:"mediaType=application/vnd.vimeo.user+json"`
}

type EditUserAlt1Response struct {
	ContentType string
	StatusCode  int64
	User        *shared.User
}
