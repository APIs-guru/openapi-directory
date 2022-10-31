package operations

import (
"openapi/pkg/models/shared")

type SongAPIGetDerivedPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}


type SongAPIGetDerivedFieldsEnum string

const (
    SongAPIGetDerivedFieldsEnumNone SongAPIGetDerivedFieldsEnum = "None"
SongAPIGetDerivedFieldsEnumAdditionalNames SongAPIGetDerivedFieldsEnum = "AdditionalNames"
SongAPIGetDerivedFieldsEnumAlbums SongAPIGetDerivedFieldsEnum = "Albums"
SongAPIGetDerivedFieldsEnumArtists SongAPIGetDerivedFieldsEnum = "Artists"
SongAPIGetDerivedFieldsEnumLyrics SongAPIGetDerivedFieldsEnum = "Lyrics"
SongAPIGetDerivedFieldsEnumMainPicture SongAPIGetDerivedFieldsEnum = "MainPicture"
SongAPIGetDerivedFieldsEnumNames SongAPIGetDerivedFieldsEnum = "Names"
SongAPIGetDerivedFieldsEnumPVs SongAPIGetDerivedFieldsEnum = "PVs"
SongAPIGetDerivedFieldsEnumReleaseEvent SongAPIGetDerivedFieldsEnum = "ReleaseEvent"
SongAPIGetDerivedFieldsEnumTags SongAPIGetDerivedFieldsEnum = "Tags"
SongAPIGetDerivedFieldsEnumThumbURL SongAPIGetDerivedFieldsEnum = "ThumbUrl"
SongAPIGetDerivedFieldsEnumWebLinks SongAPIGetDerivedFieldsEnum = "WebLinks"
)



type SongAPIGetDerivedLangEnum string

const (
    SongAPIGetDerivedLangEnumDefault SongAPIGetDerivedLangEnum = "Default"
SongAPIGetDerivedLangEnumJapanese SongAPIGetDerivedLangEnum = "Japanese"
SongAPIGetDerivedLangEnumRomaji SongAPIGetDerivedLangEnum = "Romaji"
SongAPIGetDerivedLangEnumEnglish SongAPIGetDerivedLangEnum = "English"
)


type SongAPIGetDerivedQueryParams struct {
    Fields *SongAPIGetDerivedFieldsEnum `queryParam:"style=form,explode=true,name=fields"`
    Lang *SongAPIGetDerivedLangEnum `queryParam:"style=form,explode=true,name=lang"`
    
}

type SongAPIGetDerivedRequest struct {
    PathParams SongAPIGetDerivedPathParams 
    QueryParams SongAPIGetDerivedQueryParams 
    
}

type SongAPIGetDerivedResponse struct {
    Body []byte 
    ContentType string 
    SongForAPIContracts []shared.SongForAPIContract 
    StatusCode int64 
    
}

