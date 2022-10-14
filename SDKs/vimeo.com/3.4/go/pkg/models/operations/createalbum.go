package operations

import (
	"openapi/pkg/models/shared"
)

type CreateAlbumPathParams struct {
	UserID float64 `pathParam:"style=simple,explode=false,name=user_id"`
}

type CreateAlbumRequestBodyLayoutEnum string

const (
	CreateAlbumRequestBodyLayoutEnumGrid   CreateAlbumRequestBodyLayoutEnum = "grid"
	CreateAlbumRequestBodyLayoutEnumPlayer CreateAlbumRequestBodyLayoutEnum = "player"
)

type CreateAlbumRequestBodyPrivacyEnum string

const (
	CreateAlbumRequestBodyPrivacyEnumAnybody   CreateAlbumRequestBodyPrivacyEnum = "anybody"
	CreateAlbumRequestBodyPrivacyEnumEmbedOnly CreateAlbumRequestBodyPrivacyEnum = "embed_only"
	CreateAlbumRequestBodyPrivacyEnumPassword  CreateAlbumRequestBodyPrivacyEnum = "password"
)

type CreateAlbumRequestBodySortEnum string

const (
	CreateAlbumRequestBodySortEnumAddedFirst   CreateAlbumRequestBodySortEnum = "added_first"
	CreateAlbumRequestBodySortEnumAddedLast    CreateAlbumRequestBodySortEnum = "added_last"
	CreateAlbumRequestBodySortEnumAlphabetical CreateAlbumRequestBodySortEnum = "alphabetical"
	CreateAlbumRequestBodySortEnumArranged     CreateAlbumRequestBodySortEnum = "arranged"
	CreateAlbumRequestBodySortEnumComments     CreateAlbumRequestBodySortEnum = "comments"
	CreateAlbumRequestBodySortEnumLikes        CreateAlbumRequestBodySortEnum = "likes"
	CreateAlbumRequestBodySortEnumNewest       CreateAlbumRequestBodySortEnum = "newest"
	CreateAlbumRequestBodySortEnumOldest       CreateAlbumRequestBodySortEnum = "oldest"
	CreateAlbumRequestBodySortEnumPlays        CreateAlbumRequestBodySortEnum = "plays"
)

type CreateAlbumRequestBodyThemeEnum string

const (
	CreateAlbumRequestBodyThemeEnumDark     CreateAlbumRequestBodyThemeEnum = "dark"
	CreateAlbumRequestBodyThemeEnumStandard CreateAlbumRequestBodyThemeEnum = "standard"
)

type CreateAlbumRequestBody struct {
	BrandColor  *string                            `json:"brand_color,omitempty"`
	Description *string                            `json:"description,omitempty"`
	HideNav     *bool                              `json:"hide_nav,omitempty"`
	Layout      *CreateAlbumRequestBodyLayoutEnum  `json:"layout,omitempty"`
	Name        string                             `json:"name"`
	Password    *string                            `json:"password,omitempty"`
	Privacy     *CreateAlbumRequestBodyPrivacyEnum `json:"privacy,omitempty"`
	ReviewMode  *bool                              `json:"review_mode,omitempty"`
	Sort        *CreateAlbumRequestBodySortEnum    `json:"sort,omitempty"`
	Theme       *CreateAlbumRequestBodyThemeEnum   `json:"theme,omitempty"`
}

type CreateAlbumSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type CreateAlbumRequest struct {
	PathParams CreateAlbumPathParams
	Request    CreateAlbumRequestBody `request:"mediaType=application/vnd.vimeo.album+json"`
	Security   CreateAlbumSecurity
}

type CreateAlbumResponse struct {
	ContentType string
	StatusCode  int64
	Album       *shared.Album
	LegacyError *shared.LegacyError
}
