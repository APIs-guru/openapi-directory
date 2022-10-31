package operations

import (
"openapi/pkg/models/shared")

type EditUserPathParams struct {
    UserID float64 `pathParam:"style=simple,explode=false,name=user_id"`
    
}


type EditUserRequestBodyVideosPrivacyCommentsEnum string

const (
    EditUserRequestBodyVideosPrivacyCommentsEnumAnybody EditUserRequestBodyVideosPrivacyCommentsEnum = "anybody"
EditUserRequestBodyVideosPrivacyCommentsEnumContacts EditUserRequestBodyVideosPrivacyCommentsEnum = "contacts"
EditUserRequestBodyVideosPrivacyCommentsEnumNobody EditUserRequestBodyVideosPrivacyCommentsEnum = "nobody"
)



type EditUserRequestBodyVideosPrivacyEmbedEnum string

const (
    EditUserRequestBodyVideosPrivacyEmbedEnumPrivate EditUserRequestBodyVideosPrivacyEmbedEnum = "private"
EditUserRequestBodyVideosPrivacyEmbedEnumPublic EditUserRequestBodyVideosPrivacyEmbedEnum = "public"
EditUserRequestBodyVideosPrivacyEmbedEnumWhitelist EditUserRequestBodyVideosPrivacyEmbedEnum = "whitelist"
)



type EditUserRequestBodyVideosPrivacyViewEnum string

const (
    EditUserRequestBodyVideosPrivacyViewEnumAnybody EditUserRequestBodyVideosPrivacyViewEnum = "anybody"
EditUserRequestBodyVideosPrivacyViewEnumContacts EditUserRequestBodyVideosPrivacyViewEnum = "contacts"
EditUserRequestBodyVideosPrivacyViewEnumDisable EditUserRequestBodyVideosPrivacyViewEnum = "disable"
EditUserRequestBodyVideosPrivacyViewEnumNobody EditUserRequestBodyVideosPrivacyViewEnum = "nobody"
EditUserRequestBodyVideosPrivacyViewEnumPassword EditUserRequestBodyVideosPrivacyViewEnum = "password"
EditUserRequestBodyVideosPrivacyViewEnumUnlisted EditUserRequestBodyVideosPrivacyViewEnum = "unlisted"
EditUserRequestBodyVideosPrivacyViewEnumUsers EditUserRequestBodyVideosPrivacyViewEnum = "users"
)


type EditUserRequestBodyVideosPrivacy struct {
    Add *bool `json:"add,omitempty"`
    Comments *EditUserRequestBodyVideosPrivacyCommentsEnum `json:"comments,omitempty"`
    Download *bool `json:"download,omitempty"`
    Embed *EditUserRequestBodyVideosPrivacyEmbedEnum `json:"embed,omitempty"`
    View *EditUserRequestBodyVideosPrivacyViewEnum `json:"view,omitempty"`
    
}

type EditUserRequestBodyVideos struct {
    Privacy *EditUserRequestBodyVideosPrivacy `json:"privacy,omitempty"`
    
}

type EditUserRequestBody struct {
    Bio *string `json:"bio,omitempty"`
    ContentFilter []string `json:"content_filter,omitempty"`
    Link *string `json:"link,omitempty"`
    Location *string `json:"location,omitempty"`
    Name *string `json:"name,omitempty"`
    Password *string `json:"password,omitempty"`
    Videos *EditUserRequestBodyVideos `json:"videos,omitempty"`
    
}

type EditUserRequest struct {
    PathParams EditUserPathParams 
    Request *EditUserRequestBody `request:"mediaType=application/vnd.vimeo.user+json"`
    
}

type EditUserResponse struct {
    ContentType string 
    StatusCode int64 
    User *shared.User 
    
}

