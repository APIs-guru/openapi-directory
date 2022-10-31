package operations

import (
"openapi/pkg/models/shared")

type EditAlbumPathParams struct {
    AlbumID float64 `pathParam:"style=simple,explode=false,name=album_id"`
    UserID float64 `pathParam:"style=simple,explode=false,name=user_id"`
    
}


type EditAlbumRequestBodyLayoutEnum string

const (
    EditAlbumRequestBodyLayoutEnumGrid EditAlbumRequestBodyLayoutEnum = "grid"
EditAlbumRequestBodyLayoutEnumPlayer EditAlbumRequestBodyLayoutEnum = "player"
)



type EditAlbumRequestBodyPrivacyEnum string

const (
    EditAlbumRequestBodyPrivacyEnumAnybody EditAlbumRequestBodyPrivacyEnum = "anybody"
EditAlbumRequestBodyPrivacyEnumEmbedOnly EditAlbumRequestBodyPrivacyEnum = "embed_only"
EditAlbumRequestBodyPrivacyEnumPassword EditAlbumRequestBodyPrivacyEnum = "password"
)



type EditAlbumRequestBodySortEnum string

const (
    EditAlbumRequestBodySortEnumAddedFirst EditAlbumRequestBodySortEnum = "added_first"
EditAlbumRequestBodySortEnumAddedLast EditAlbumRequestBodySortEnum = "added_last"
EditAlbumRequestBodySortEnumAlphabetical EditAlbumRequestBodySortEnum = "alphabetical"
EditAlbumRequestBodySortEnumArranged EditAlbumRequestBodySortEnum = "arranged"
EditAlbumRequestBodySortEnumComments EditAlbumRequestBodySortEnum = "comments"
EditAlbumRequestBodySortEnumLikes EditAlbumRequestBodySortEnum = "likes"
EditAlbumRequestBodySortEnumNewest EditAlbumRequestBodySortEnum = "newest"
EditAlbumRequestBodySortEnumOldest EditAlbumRequestBodySortEnum = "oldest"
EditAlbumRequestBodySortEnumPlays EditAlbumRequestBodySortEnum = "plays"
)



type EditAlbumRequestBodyThemeEnum string

const (
    EditAlbumRequestBodyThemeEnumDark EditAlbumRequestBodyThemeEnum = "dark"
EditAlbumRequestBodyThemeEnumStandard EditAlbumRequestBodyThemeEnum = "standard"
)


type EditAlbumRequestBody struct {
    BrandColor *string `json:"brand_color,omitempty"`
    Description *string `json:"description,omitempty"`
    Domain *string `json:"domain,omitempty"`
    HideNav *bool `json:"hide_nav,omitempty"`
    Layout *EditAlbumRequestBodyLayoutEnum `json:"layout,omitempty"`
    Name *string `json:"name,omitempty"`
    Password *string `json:"password,omitempty"`
    Privacy *EditAlbumRequestBodyPrivacyEnum `json:"privacy,omitempty"`
    ReviewMode *bool `json:"review_mode,omitempty"`
    Sort *EditAlbumRequestBodySortEnum `json:"sort,omitempty"`
    Theme *EditAlbumRequestBodyThemeEnum `json:"theme,omitempty"`
    URL *string `json:"url,omitempty"`
    UseCustomDomain *bool `json:"use_custom_domain,omitempty"`
    
}

type EditAlbumSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type EditAlbumRequest struct {
    PathParams EditAlbumPathParams 
    Request *EditAlbumRequestBody `request:"mediaType=application/vnd.vimeo.album+json"`
    Security EditAlbumSecurity 
    
}

type EditAlbumResponse struct {
    ContentType string 
    StatusCode int64 
    Album *shared.Album 
    LegacyError *shared.LegacyError 
    
}

