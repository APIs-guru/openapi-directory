package operations

import (
"time"
"openapi/pkg/models/shared")


type SongAPIGetTopSongsFieldsEnum string

const (
    SongAPIGetTopSongsFieldsEnumNone SongAPIGetTopSongsFieldsEnum = "None"
SongAPIGetTopSongsFieldsEnumAdditionalNames SongAPIGetTopSongsFieldsEnum = "AdditionalNames"
SongAPIGetTopSongsFieldsEnumAlbums SongAPIGetTopSongsFieldsEnum = "Albums"
SongAPIGetTopSongsFieldsEnumArtists SongAPIGetTopSongsFieldsEnum = "Artists"
SongAPIGetTopSongsFieldsEnumLyrics SongAPIGetTopSongsFieldsEnum = "Lyrics"
SongAPIGetTopSongsFieldsEnumMainPicture SongAPIGetTopSongsFieldsEnum = "MainPicture"
SongAPIGetTopSongsFieldsEnumNames SongAPIGetTopSongsFieldsEnum = "Names"
SongAPIGetTopSongsFieldsEnumPVs SongAPIGetTopSongsFieldsEnum = "PVs"
SongAPIGetTopSongsFieldsEnumReleaseEvent SongAPIGetTopSongsFieldsEnum = "ReleaseEvent"
SongAPIGetTopSongsFieldsEnumTags SongAPIGetTopSongsFieldsEnum = "Tags"
SongAPIGetTopSongsFieldsEnumThumbURL SongAPIGetTopSongsFieldsEnum = "ThumbUrl"
SongAPIGetTopSongsFieldsEnumWebLinks SongAPIGetTopSongsFieldsEnum = "WebLinks"
)



type SongAPIGetTopSongsFilterByEnum string

const (
    SongAPIGetTopSongsFilterByEnumCreateDate SongAPIGetTopSongsFilterByEnum = "CreateDate"
SongAPIGetTopSongsFilterByEnumPublishDate SongAPIGetTopSongsFilterByEnum = "PublishDate"
SongAPIGetTopSongsFilterByEnumPopularity SongAPIGetTopSongsFilterByEnum = "Popularity"
)



type SongAPIGetTopSongsLanguagePreferenceEnum string

const (
    SongAPIGetTopSongsLanguagePreferenceEnumDefault SongAPIGetTopSongsLanguagePreferenceEnum = "Default"
SongAPIGetTopSongsLanguagePreferenceEnumJapanese SongAPIGetTopSongsLanguagePreferenceEnum = "Japanese"
SongAPIGetTopSongsLanguagePreferenceEnumRomaji SongAPIGetTopSongsLanguagePreferenceEnum = "Romaji"
SongAPIGetTopSongsLanguagePreferenceEnumEnglish SongAPIGetTopSongsLanguagePreferenceEnum = "English"
)



type SongAPIGetTopSongsVocalistEnum string

const (
    SongAPIGetTopSongsVocalistEnumNothing SongAPIGetTopSongsVocalistEnum = "Nothing"
SongAPIGetTopSongsVocalistEnumVocaloid SongAPIGetTopSongsVocalistEnum = "Vocaloid"
SongAPIGetTopSongsVocalistEnumUtau SongAPIGetTopSongsVocalistEnum = "UTAU"
SongAPIGetTopSongsVocalistEnumOther SongAPIGetTopSongsVocalistEnum = "Other"
)


type SongAPIGetTopSongsQueryParams struct {
    DurationHours *int32 `queryParam:"style=form,explode=true,name=durationHours"`
    Fields *SongAPIGetTopSongsFieldsEnum `queryParam:"style=form,explode=true,name=fields"`
    FilterBy *SongAPIGetTopSongsFilterByEnum `queryParam:"style=form,explode=true,name=filterBy"`
    LanguagePreference *SongAPIGetTopSongsLanguagePreferenceEnum `queryParam:"style=form,explode=true,name=languagePreference"`
    MaxResults *int32 `queryParam:"style=form,explode=true,name=maxResults"`
    StartDate *time.Time `queryParam:"style=form,explode=true,name=startDate"`
    Vocalist *SongAPIGetTopSongsVocalistEnum `queryParam:"style=form,explode=true,name=vocalist"`
    
}

type SongAPIGetTopSongsRequest struct {
    QueryParams SongAPIGetTopSongsQueryParams 
    
}

type SongAPIGetTopSongsResponse struct {
    Body []byte 
    ContentType string 
    SongForAPIContracts []shared.SongForAPIContract 
    StatusCode int64 
    
}

