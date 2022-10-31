package operations

import (
"openapi/pkg/models/shared")


type SongAPIGetHighlightedSongsFieldsEnum string

const (
    SongAPIGetHighlightedSongsFieldsEnumNone SongAPIGetHighlightedSongsFieldsEnum = "None"
SongAPIGetHighlightedSongsFieldsEnumAdditionalNames SongAPIGetHighlightedSongsFieldsEnum = "AdditionalNames"
SongAPIGetHighlightedSongsFieldsEnumAlbums SongAPIGetHighlightedSongsFieldsEnum = "Albums"
SongAPIGetHighlightedSongsFieldsEnumArtists SongAPIGetHighlightedSongsFieldsEnum = "Artists"
SongAPIGetHighlightedSongsFieldsEnumLyrics SongAPIGetHighlightedSongsFieldsEnum = "Lyrics"
SongAPIGetHighlightedSongsFieldsEnumMainPicture SongAPIGetHighlightedSongsFieldsEnum = "MainPicture"
SongAPIGetHighlightedSongsFieldsEnumNames SongAPIGetHighlightedSongsFieldsEnum = "Names"
SongAPIGetHighlightedSongsFieldsEnumPVs SongAPIGetHighlightedSongsFieldsEnum = "PVs"
SongAPIGetHighlightedSongsFieldsEnumReleaseEvent SongAPIGetHighlightedSongsFieldsEnum = "ReleaseEvent"
SongAPIGetHighlightedSongsFieldsEnumTags SongAPIGetHighlightedSongsFieldsEnum = "Tags"
SongAPIGetHighlightedSongsFieldsEnumThumbURL SongAPIGetHighlightedSongsFieldsEnum = "ThumbUrl"
SongAPIGetHighlightedSongsFieldsEnumWebLinks SongAPIGetHighlightedSongsFieldsEnum = "WebLinks"
)



type SongAPIGetHighlightedSongsLanguagePreferenceEnum string

const (
    SongAPIGetHighlightedSongsLanguagePreferenceEnumDefault SongAPIGetHighlightedSongsLanguagePreferenceEnum = "Default"
SongAPIGetHighlightedSongsLanguagePreferenceEnumJapanese SongAPIGetHighlightedSongsLanguagePreferenceEnum = "Japanese"
SongAPIGetHighlightedSongsLanguagePreferenceEnumRomaji SongAPIGetHighlightedSongsLanguagePreferenceEnum = "Romaji"
SongAPIGetHighlightedSongsLanguagePreferenceEnumEnglish SongAPIGetHighlightedSongsLanguagePreferenceEnum = "English"
)


type SongAPIGetHighlightedSongsQueryParams struct {
    Fields *SongAPIGetHighlightedSongsFieldsEnum `queryParam:"style=form,explode=true,name=fields"`
    LanguagePreference *SongAPIGetHighlightedSongsLanguagePreferenceEnum `queryParam:"style=form,explode=true,name=languagePreference"`
    
}

type SongAPIGetHighlightedSongsRequest struct {
    QueryParams SongAPIGetHighlightedSongsQueryParams 
    
}

type SongAPIGetHighlightedSongsResponse struct {
    Body []byte 
    ContentType string 
    SongForAPIContracts []shared.SongForAPIContract 
    StatusCode int64 
    
}

