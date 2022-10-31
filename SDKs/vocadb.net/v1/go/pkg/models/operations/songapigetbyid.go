package operations

import (
"openapi/pkg/models/shared")

type SongAPIGetByIDPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}


type SongAPIGetByIDFieldsEnum string

const (
    SongAPIGetByIDFieldsEnumNone SongAPIGetByIDFieldsEnum = "None"
SongAPIGetByIDFieldsEnumAdditionalNames SongAPIGetByIDFieldsEnum = "AdditionalNames"
SongAPIGetByIDFieldsEnumAlbums SongAPIGetByIDFieldsEnum = "Albums"
SongAPIGetByIDFieldsEnumArtists SongAPIGetByIDFieldsEnum = "Artists"
SongAPIGetByIDFieldsEnumLyrics SongAPIGetByIDFieldsEnum = "Lyrics"
SongAPIGetByIDFieldsEnumMainPicture SongAPIGetByIDFieldsEnum = "MainPicture"
SongAPIGetByIDFieldsEnumNames SongAPIGetByIDFieldsEnum = "Names"
SongAPIGetByIDFieldsEnumPVs SongAPIGetByIDFieldsEnum = "PVs"
SongAPIGetByIDFieldsEnumReleaseEvent SongAPIGetByIDFieldsEnum = "ReleaseEvent"
SongAPIGetByIDFieldsEnumTags SongAPIGetByIDFieldsEnum = "Tags"
SongAPIGetByIDFieldsEnumThumbURL SongAPIGetByIDFieldsEnum = "ThumbUrl"
SongAPIGetByIDFieldsEnumWebLinks SongAPIGetByIDFieldsEnum = "WebLinks"
)



type SongAPIGetByIDLangEnum string

const (
    SongAPIGetByIDLangEnumDefault SongAPIGetByIDLangEnum = "Default"
SongAPIGetByIDLangEnumJapanese SongAPIGetByIDLangEnum = "Japanese"
SongAPIGetByIDLangEnumRomaji SongAPIGetByIDLangEnum = "Romaji"
SongAPIGetByIDLangEnumEnglish SongAPIGetByIDLangEnum = "English"
)


type SongAPIGetByIDQueryParams struct {
    Fields *SongAPIGetByIDFieldsEnum `queryParam:"style=form,explode=true,name=fields"`
    Lang *SongAPIGetByIDLangEnum `queryParam:"style=form,explode=true,name=lang"`
    
}

type SongAPIGetByIDRequest struct {
    PathParams SongAPIGetByIDPathParams 
    QueryParams SongAPIGetByIDQueryParams 
    
}

type SongAPIGetByIDResponse struct {
    Body []byte 
    ContentType string 
    SongForAPIContract *shared.SongForAPIContract 
    StatusCode int64 
    
}

