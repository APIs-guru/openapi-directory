package operations

import (
"openapi/pkg/models/shared")

type ReleaseEventAPIGetAlbumsPathParams struct {
    EventID int32 `pathParam:"style=simple,explode=false,name=eventId"`
    
}


type ReleaseEventAPIGetAlbumsFieldsEnum string

const (
    ReleaseEventAPIGetAlbumsFieldsEnumNone ReleaseEventAPIGetAlbumsFieldsEnum = "None"
ReleaseEventAPIGetAlbumsFieldsEnumAdditionalNames ReleaseEventAPIGetAlbumsFieldsEnum = "AdditionalNames"
ReleaseEventAPIGetAlbumsFieldsEnumArtists ReleaseEventAPIGetAlbumsFieldsEnum = "Artists"
ReleaseEventAPIGetAlbumsFieldsEnumDescription ReleaseEventAPIGetAlbumsFieldsEnum = "Description"
ReleaseEventAPIGetAlbumsFieldsEnumDiscs ReleaseEventAPIGetAlbumsFieldsEnum = "Discs"
ReleaseEventAPIGetAlbumsFieldsEnumIdentifiers ReleaseEventAPIGetAlbumsFieldsEnum = "Identifiers"
ReleaseEventAPIGetAlbumsFieldsEnumMainPicture ReleaseEventAPIGetAlbumsFieldsEnum = "MainPicture"
ReleaseEventAPIGetAlbumsFieldsEnumNames ReleaseEventAPIGetAlbumsFieldsEnum = "Names"
ReleaseEventAPIGetAlbumsFieldsEnumPVs ReleaseEventAPIGetAlbumsFieldsEnum = "PVs"
ReleaseEventAPIGetAlbumsFieldsEnumReleaseEvent ReleaseEventAPIGetAlbumsFieldsEnum = "ReleaseEvent"
ReleaseEventAPIGetAlbumsFieldsEnumTags ReleaseEventAPIGetAlbumsFieldsEnum = "Tags"
ReleaseEventAPIGetAlbumsFieldsEnumTracks ReleaseEventAPIGetAlbumsFieldsEnum = "Tracks"
ReleaseEventAPIGetAlbumsFieldsEnumWebLinks ReleaseEventAPIGetAlbumsFieldsEnum = "WebLinks"
)



type ReleaseEventAPIGetAlbumsLangEnum string

const (
    ReleaseEventAPIGetAlbumsLangEnumDefault ReleaseEventAPIGetAlbumsLangEnum = "Default"
ReleaseEventAPIGetAlbumsLangEnumJapanese ReleaseEventAPIGetAlbumsLangEnum = "Japanese"
ReleaseEventAPIGetAlbumsLangEnumRomaji ReleaseEventAPIGetAlbumsLangEnum = "Romaji"
ReleaseEventAPIGetAlbumsLangEnumEnglish ReleaseEventAPIGetAlbumsLangEnum = "English"
)


type ReleaseEventAPIGetAlbumsQueryParams struct {
    Fields *ReleaseEventAPIGetAlbumsFieldsEnum `queryParam:"style=form,explode=true,name=fields"`
    Lang *ReleaseEventAPIGetAlbumsLangEnum `queryParam:"style=form,explode=true,name=lang"`
    
}

type ReleaseEventAPIGetAlbumsRequest struct {
    PathParams ReleaseEventAPIGetAlbumsPathParams 
    QueryParams ReleaseEventAPIGetAlbumsQueryParams 
    
}

type ReleaseEventAPIGetAlbumsResponse struct {
    AlbumForAPIContracts []shared.AlbumForAPIContract 
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

