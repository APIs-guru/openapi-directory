package operations

import (
	"openapi/pkg/models/shared"
)

type CreateAlbumAlt1RequestBodyLayoutEnum string

const (
	CreateAlbumAlt1RequestBodyLayoutEnumGrid   CreateAlbumAlt1RequestBodyLayoutEnum = "grid"
	CreateAlbumAlt1RequestBodyLayoutEnumPlayer CreateAlbumAlt1RequestBodyLayoutEnum = "player"
)

type CreateAlbumAlt1RequestBodyPrivacyEnum string

const (
	CreateAlbumAlt1RequestBodyPrivacyEnumAnybody   CreateAlbumAlt1RequestBodyPrivacyEnum = "anybody"
	CreateAlbumAlt1RequestBodyPrivacyEnumEmbedOnly CreateAlbumAlt1RequestBodyPrivacyEnum = "embed_only"
	CreateAlbumAlt1RequestBodyPrivacyEnumPassword  CreateAlbumAlt1RequestBodyPrivacyEnum = "password"
)

type CreateAlbumAlt1RequestBodySortEnum string

const (
	CreateAlbumAlt1RequestBodySortEnumAddedFirst   CreateAlbumAlt1RequestBodySortEnum = "added_first"
	CreateAlbumAlt1RequestBodySortEnumAddedLast    CreateAlbumAlt1RequestBodySortEnum = "added_last"
	CreateAlbumAlt1RequestBodySortEnumAlphabetical CreateAlbumAlt1RequestBodySortEnum = "alphabetical"
	CreateAlbumAlt1RequestBodySortEnumArranged     CreateAlbumAlt1RequestBodySortEnum = "arranged"
	CreateAlbumAlt1RequestBodySortEnumComments     CreateAlbumAlt1RequestBodySortEnum = "comments"
	CreateAlbumAlt1RequestBodySortEnumLikes        CreateAlbumAlt1RequestBodySortEnum = "likes"
	CreateAlbumAlt1RequestBodySortEnumNewest       CreateAlbumAlt1RequestBodySortEnum = "newest"
	CreateAlbumAlt1RequestBodySortEnumOldest       CreateAlbumAlt1RequestBodySortEnum = "oldest"
	CreateAlbumAlt1RequestBodySortEnumPlays        CreateAlbumAlt1RequestBodySortEnum = "plays"
)

type CreateAlbumAlt1RequestBodyThemeEnum string

const (
	CreateAlbumAlt1RequestBodyThemeEnumDark     CreateAlbumAlt1RequestBodyThemeEnum = "dark"
	CreateAlbumAlt1RequestBodyThemeEnumStandard CreateAlbumAlt1RequestBodyThemeEnum = "standard"
)

type CreateAlbumAlt1RequestBody struct {
	BrandColor  *string                                `json:"brand_color"`
	Description *string                                `json:"description"`
	HideNav     *bool                                  `json:"hide_nav"`
	Layout      *CreateAlbumAlt1RequestBodyLayoutEnum  `json:"layout"`
	Name        string                                 `json:"name"`
	Password    *string                                `json:"password"`
	Privacy     *CreateAlbumAlt1RequestBodyPrivacyEnum `json:"privacy"`
	ReviewMode  *bool                                  `json:"review_mode"`
	Sort        *CreateAlbumAlt1RequestBodySortEnum    `json:"sort"`
	Theme       *CreateAlbumAlt1RequestBodyThemeEnum   `json:"theme"`
}

type CreateAlbumAlt1Security struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type CreateAlbumAlt1Request struct {
	Request  CreateAlbumAlt1RequestBody `request:"mediaType=application/vnd.vimeo.album+json"`
	Security CreateAlbumAlt1Security
}

type CreateAlbumAlt1Response struct {
	ContentType string
	StatusCode  int64
	Album       *shared.Album
	LegacyError *shared.LegacyError
}
