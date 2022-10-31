package operations

import (
"openapi/pkg/models/shared")


type PvAPIGetListLangEnum string

const (
    PvAPIGetListLangEnumDefault PvAPIGetListLangEnum = "Default"
PvAPIGetListLangEnumJapanese PvAPIGetListLangEnum = "Japanese"
PvAPIGetListLangEnumRomaji PvAPIGetListLangEnum = "Romaji"
PvAPIGetListLangEnumEnglish PvAPIGetListLangEnum = "English"
)



type PvAPIGetListServiceEnum string

const (
    PvAPIGetListServiceEnumNicoNicoDouga PvAPIGetListServiceEnum = "NicoNicoDouga"
PvAPIGetListServiceEnumYoutube PvAPIGetListServiceEnum = "Youtube"
PvAPIGetListServiceEnumSoundCloud PvAPIGetListServiceEnum = "SoundCloud"
PvAPIGetListServiceEnumVimeo PvAPIGetListServiceEnum = "Vimeo"
PvAPIGetListServiceEnumPiapro PvAPIGetListServiceEnum = "Piapro"
PvAPIGetListServiceEnumBilibili PvAPIGetListServiceEnum = "Bilibili"
PvAPIGetListServiceEnumFile PvAPIGetListServiceEnum = "File"
PvAPIGetListServiceEnumLocalFile PvAPIGetListServiceEnum = "LocalFile"
PvAPIGetListServiceEnumCreofuga PvAPIGetListServiceEnum = "Creofuga"
PvAPIGetListServiceEnumBandcamp PvAPIGetListServiceEnum = "Bandcamp"
)


type PvAPIGetListQueryParams struct {
    Author *string `queryParam:"style=form,explode=true,name=author"`
    GetTotalCount *bool `queryParam:"style=form,explode=true,name=getTotalCount"`
    Lang *PvAPIGetListLangEnum `queryParam:"style=form,explode=true,name=lang"`
    MaxResults *int32 `queryParam:"style=form,explode=true,name=maxResults"`
    Name *string `queryParam:"style=form,explode=true,name=name"`
    Service *PvAPIGetListServiceEnum `queryParam:"style=form,explode=true,name=service"`
    
}

type PvAPIGetListRequest struct {
    QueryParams PvAPIGetListQueryParams 
    
}

type PvAPIGetListResponse struct {
    Body []byte 
    ContentType string 
    PartialFindResultPvForSongContract *shared.PartialFindResultPvForSongContract 
    StatusCode int64 
    
}

