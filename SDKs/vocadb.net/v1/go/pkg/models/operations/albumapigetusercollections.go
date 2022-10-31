package operations

import (
"openapi/pkg/models/shared")

type AlbumAPIGetUserCollectionsPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}


type AlbumAPIGetUserCollectionsLanguagePreferenceEnum string

const (
    AlbumAPIGetUserCollectionsLanguagePreferenceEnumDefault AlbumAPIGetUserCollectionsLanguagePreferenceEnum = "Default"
AlbumAPIGetUserCollectionsLanguagePreferenceEnumJapanese AlbumAPIGetUserCollectionsLanguagePreferenceEnum = "Japanese"
AlbumAPIGetUserCollectionsLanguagePreferenceEnumRomaji AlbumAPIGetUserCollectionsLanguagePreferenceEnum = "Romaji"
AlbumAPIGetUserCollectionsLanguagePreferenceEnumEnglish AlbumAPIGetUserCollectionsLanguagePreferenceEnum = "English"
)


type AlbumAPIGetUserCollectionsQueryParams struct {
    LanguagePreference *AlbumAPIGetUserCollectionsLanguagePreferenceEnum `queryParam:"style=form,explode=true,name=languagePreference"`
    
}

type AlbumAPIGetUserCollectionsRequest struct {
    PathParams AlbumAPIGetUserCollectionsPathParams 
    QueryParams AlbumAPIGetUserCollectionsQueryParams 
    
}

type AlbumAPIGetUserCollectionsResponse struct {
    AlbumForUserForAPIContracts []shared.AlbumForUserForAPIContract 
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

