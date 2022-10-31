package operations

import (
	"openapi/pkg/models/shared"
)

type SongAPIGetRatingsPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type SongAPIGetRatingsLangEnum string

const (
	SongAPIGetRatingsLangEnumDefault  SongAPIGetRatingsLangEnum = "Default"
	SongAPIGetRatingsLangEnumJapanese SongAPIGetRatingsLangEnum = "Japanese"
	SongAPIGetRatingsLangEnumRomaji   SongAPIGetRatingsLangEnum = "Romaji"
	SongAPIGetRatingsLangEnumEnglish  SongAPIGetRatingsLangEnum = "English"
)

type SongAPIGetRatingsUserFieldsEnum string

const (
	SongAPIGetRatingsUserFieldsEnumNone           SongAPIGetRatingsUserFieldsEnum = "None"
	SongAPIGetRatingsUserFieldsEnumKnownLanguages SongAPIGetRatingsUserFieldsEnum = "KnownLanguages"
	SongAPIGetRatingsUserFieldsEnumMainPicture    SongAPIGetRatingsUserFieldsEnum = "MainPicture"
	SongAPIGetRatingsUserFieldsEnumOldUsernames   SongAPIGetRatingsUserFieldsEnum = "OldUsernames"
)

type SongAPIGetRatingsQueryParams struct {
	Lang       *SongAPIGetRatingsLangEnum      `queryParam:"style=form,explode=true,name=lang"`
	UserFields SongAPIGetRatingsUserFieldsEnum `queryParam:"style=form,explode=true,name=userFields"`
}

type SongAPIGetRatingsRequest struct {
	PathParams  SongAPIGetRatingsPathParams
	QueryParams SongAPIGetRatingsQueryParams
}

type SongAPIGetRatingsResponse struct {
	Body                            []byte
	ContentType                     string
	RatedSongForUserForAPIContracts []shared.RatedSongForUserForAPIContract
	StatusCode                      int64
}
