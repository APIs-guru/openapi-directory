package operations

import (
"openapi/pkg/models/shared")

type EditAlbumAlt1PathParams struct {
    AlbumID float64 `pathParam:"style=simple,explode=false,name=album_id"`
    
}


type EditAlbumAlt1RequestBodyLayoutEnum string

const (
    EditAlbumAlt1RequestBodyLayoutEnumGrid EditAlbumAlt1RequestBodyLayoutEnum = "grid"
EditAlbumAlt1RequestBodyLayoutEnumPlayer EditAlbumAlt1RequestBodyLayoutEnum = "player"
)



type EditAlbumAlt1RequestBodyPrivacyEnum string

const (
    EditAlbumAlt1RequestBodyPrivacyEnumAnybody EditAlbumAlt1RequestBodyPrivacyEnum = "anybody"
EditAlbumAlt1RequestBodyPrivacyEnumEmbedOnly EditAlbumAlt1RequestBodyPrivacyEnum = "embed_only"
EditAlbumAlt1RequestBodyPrivacyEnumPassword EditAlbumAlt1RequestBodyPrivacyEnum = "password"
)



type EditAlbumAlt1RequestBodySortEnum string

const (
    EditAlbumAlt1RequestBodySortEnumAddedFirst EditAlbumAlt1RequestBodySortEnum = "added_first"
EditAlbumAlt1RequestBodySortEnumAddedLast EditAlbumAlt1RequestBodySortEnum = "added_last"
EditAlbumAlt1RequestBodySortEnumAlphabetical EditAlbumAlt1RequestBodySortEnum = "alphabetical"
EditAlbumAlt1RequestBodySortEnumArranged EditAlbumAlt1RequestBodySortEnum = "arranged"
EditAlbumAlt1RequestBodySortEnumComments EditAlbumAlt1RequestBodySortEnum = "comments"
EditAlbumAlt1RequestBodySortEnumLikes EditAlbumAlt1RequestBodySortEnum = "likes"
EditAlbumAlt1RequestBodySortEnumNewest EditAlbumAlt1RequestBodySortEnum = "newest"
EditAlbumAlt1RequestBodySortEnumOldest EditAlbumAlt1RequestBodySortEnum = "oldest"
EditAlbumAlt1RequestBodySortEnumPlays EditAlbumAlt1RequestBodySortEnum = "plays"
)



type EditAlbumAlt1RequestBodyThemeEnum string

const (
    EditAlbumAlt1RequestBodyThemeEnumDark EditAlbumAlt1RequestBodyThemeEnum = "dark"
EditAlbumAlt1RequestBodyThemeEnumStandard EditAlbumAlt1RequestBodyThemeEnum = "standard"
)


type EditAlbumAlt1RequestBody struct {
    BrandColor *string `json:"brand_color,omitempty"`
    Description *string `json:"description,omitempty"`
    Domain *string `json:"domain,omitempty"`
    HideNav *bool `json:"hide_nav,omitempty"`
    Layout *EditAlbumAlt1RequestBodyLayoutEnum `json:"layout,omitempty"`
    Name *string `json:"name,omitempty"`
    Password *string `json:"password,omitempty"`
    Privacy *EditAlbumAlt1RequestBodyPrivacyEnum `json:"privacy,omitempty"`
    ReviewMode *bool `json:"review_mode,omitempty"`
    Sort *EditAlbumAlt1RequestBodySortEnum `json:"sort,omitempty"`
    Theme *EditAlbumAlt1RequestBodyThemeEnum `json:"theme,omitempty"`
    URL *string `json:"url,omitempty"`
    UseCustomDomain *bool `json:"use_custom_domain,omitempty"`
    
}

type EditAlbumAlt1Security struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type EditAlbumAlt1Request struct {
    PathParams EditAlbumAlt1PathParams 
    Request *EditAlbumAlt1RequestBody `request:"mediaType=application/vnd.vimeo.album+json"`
    Security EditAlbumAlt1Security 
    
}

type EditAlbumAlt1Response struct {
    ContentType string 
    StatusCode int64 
    Album *shared.Album 
    LegacyError *shared.LegacyError 
    
}

