package operations

import (
"openapi/pkg/models/shared")

type UserAPIGetAlbumCollectionPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}


type UserAPIGetAlbumCollectionAlbumTypesEnum string

const (
    UserAPIGetAlbumCollectionAlbumTypesEnumUnknown UserAPIGetAlbumCollectionAlbumTypesEnum = "Unknown"
UserAPIGetAlbumCollectionAlbumTypesEnumAlbum UserAPIGetAlbumCollectionAlbumTypesEnum = "Album"
UserAPIGetAlbumCollectionAlbumTypesEnumSingle UserAPIGetAlbumCollectionAlbumTypesEnum = "Single"
UserAPIGetAlbumCollectionAlbumTypesEnumEp UserAPIGetAlbumCollectionAlbumTypesEnum = "EP"
UserAPIGetAlbumCollectionAlbumTypesEnumSplitAlbum UserAPIGetAlbumCollectionAlbumTypesEnum = "SplitAlbum"
UserAPIGetAlbumCollectionAlbumTypesEnumCompilation UserAPIGetAlbumCollectionAlbumTypesEnum = "Compilation"
UserAPIGetAlbumCollectionAlbumTypesEnumVideo UserAPIGetAlbumCollectionAlbumTypesEnum = "Video"
UserAPIGetAlbumCollectionAlbumTypesEnumArtbook UserAPIGetAlbumCollectionAlbumTypesEnum = "Artbook"
UserAPIGetAlbumCollectionAlbumTypesEnumGame UserAPIGetAlbumCollectionAlbumTypesEnum = "Game"
UserAPIGetAlbumCollectionAlbumTypesEnumFanmade UserAPIGetAlbumCollectionAlbumTypesEnum = "Fanmade"
UserAPIGetAlbumCollectionAlbumTypesEnumInstrumental UserAPIGetAlbumCollectionAlbumTypesEnum = "Instrumental"
UserAPIGetAlbumCollectionAlbumTypesEnumOther UserAPIGetAlbumCollectionAlbumTypesEnum = "Other"
)



type UserAPIGetAlbumCollectionFieldsEnum string

const (
    UserAPIGetAlbumCollectionFieldsEnumNone UserAPIGetAlbumCollectionFieldsEnum = "None"
UserAPIGetAlbumCollectionFieldsEnumAdditionalNames UserAPIGetAlbumCollectionFieldsEnum = "AdditionalNames"
UserAPIGetAlbumCollectionFieldsEnumArtists UserAPIGetAlbumCollectionFieldsEnum = "Artists"
UserAPIGetAlbumCollectionFieldsEnumDescription UserAPIGetAlbumCollectionFieldsEnum = "Description"
UserAPIGetAlbumCollectionFieldsEnumDiscs UserAPIGetAlbumCollectionFieldsEnum = "Discs"
UserAPIGetAlbumCollectionFieldsEnumIdentifiers UserAPIGetAlbumCollectionFieldsEnum = "Identifiers"
UserAPIGetAlbumCollectionFieldsEnumMainPicture UserAPIGetAlbumCollectionFieldsEnum = "MainPicture"
UserAPIGetAlbumCollectionFieldsEnumNames UserAPIGetAlbumCollectionFieldsEnum = "Names"
UserAPIGetAlbumCollectionFieldsEnumPVs UserAPIGetAlbumCollectionFieldsEnum = "PVs"
UserAPIGetAlbumCollectionFieldsEnumReleaseEvent UserAPIGetAlbumCollectionFieldsEnum = "ReleaseEvent"
UserAPIGetAlbumCollectionFieldsEnumTags UserAPIGetAlbumCollectionFieldsEnum = "Tags"
UserAPIGetAlbumCollectionFieldsEnumTracks UserAPIGetAlbumCollectionFieldsEnum = "Tracks"
UserAPIGetAlbumCollectionFieldsEnumWebLinks UserAPIGetAlbumCollectionFieldsEnum = "WebLinks"
)



type UserAPIGetAlbumCollectionLangEnum string

const (
    UserAPIGetAlbumCollectionLangEnumDefault UserAPIGetAlbumCollectionLangEnum = "Default"
UserAPIGetAlbumCollectionLangEnumJapanese UserAPIGetAlbumCollectionLangEnum = "Japanese"
UserAPIGetAlbumCollectionLangEnumRomaji UserAPIGetAlbumCollectionLangEnum = "Romaji"
UserAPIGetAlbumCollectionLangEnumEnglish UserAPIGetAlbumCollectionLangEnum = "English"
)



type UserAPIGetAlbumCollectionNameMatchModeEnum string

const (
    UserAPIGetAlbumCollectionNameMatchModeEnumAuto UserAPIGetAlbumCollectionNameMatchModeEnum = "Auto"
UserAPIGetAlbumCollectionNameMatchModeEnumPartial UserAPIGetAlbumCollectionNameMatchModeEnum = "Partial"
UserAPIGetAlbumCollectionNameMatchModeEnumStartsWith UserAPIGetAlbumCollectionNameMatchModeEnum = "StartsWith"
UserAPIGetAlbumCollectionNameMatchModeEnumExact UserAPIGetAlbumCollectionNameMatchModeEnum = "Exact"
UserAPIGetAlbumCollectionNameMatchModeEnumWords UserAPIGetAlbumCollectionNameMatchModeEnum = "Words"
)



type UserAPIGetAlbumCollectionPurchaseStatusesEnum string

const (
    UserAPIGetAlbumCollectionPurchaseStatusesEnumNothing UserAPIGetAlbumCollectionPurchaseStatusesEnum = "Nothing"
UserAPIGetAlbumCollectionPurchaseStatusesEnumWishlisted UserAPIGetAlbumCollectionPurchaseStatusesEnum = "Wishlisted"
UserAPIGetAlbumCollectionPurchaseStatusesEnumOrdered UserAPIGetAlbumCollectionPurchaseStatusesEnum = "Ordered"
UserAPIGetAlbumCollectionPurchaseStatusesEnumOwned UserAPIGetAlbumCollectionPurchaseStatusesEnum = "Owned"
UserAPIGetAlbumCollectionPurchaseStatusesEnumAll UserAPIGetAlbumCollectionPurchaseStatusesEnum = "All"
)



type UserAPIGetAlbumCollectionSortEnum string

const (
    UserAPIGetAlbumCollectionSortEnumNone UserAPIGetAlbumCollectionSortEnum = "None"
UserAPIGetAlbumCollectionSortEnumName UserAPIGetAlbumCollectionSortEnum = "Name"
UserAPIGetAlbumCollectionSortEnumReleaseDate UserAPIGetAlbumCollectionSortEnum = "ReleaseDate"
UserAPIGetAlbumCollectionSortEnumReleaseDateWithNulls UserAPIGetAlbumCollectionSortEnum = "ReleaseDateWithNulls"
UserAPIGetAlbumCollectionSortEnumAdditionDate UserAPIGetAlbumCollectionSortEnum = "AdditionDate"
UserAPIGetAlbumCollectionSortEnumRatingAverage UserAPIGetAlbumCollectionSortEnum = "RatingAverage"
UserAPIGetAlbumCollectionSortEnumRatingTotal UserAPIGetAlbumCollectionSortEnum = "RatingTotal"
UserAPIGetAlbumCollectionSortEnumNameThenReleaseDate UserAPIGetAlbumCollectionSortEnum = "NameThenReleaseDate"
UserAPIGetAlbumCollectionSortEnumCollectionCount UserAPIGetAlbumCollectionSortEnum = "CollectionCount"
)


type UserAPIGetAlbumCollectionQueryParams struct {
    AdvancedFilters []interface{} `queryParam:"style=form,explode=true,name=advancedFilters"`
    AlbumTypes *UserAPIGetAlbumCollectionAlbumTypesEnum `queryParam:"style=form,explode=true,name=albumTypes"`
    ArtistID *int32 `queryParam:"style=form,explode=true,name=artistId"`
    Fields *UserAPIGetAlbumCollectionFieldsEnum `queryParam:"style=form,explode=true,name=fields"`
    GetTotalCount *bool `queryParam:"style=form,explode=true,name=getTotalCount"`
    Lang *UserAPIGetAlbumCollectionLangEnum `queryParam:"style=form,explode=true,name=lang"`
    MaxResults *int32 `queryParam:"style=form,explode=true,name=maxResults"`
    NameMatchMode *UserAPIGetAlbumCollectionNameMatchModeEnum `queryParam:"style=form,explode=true,name=nameMatchMode"`
    PurchaseStatuses *UserAPIGetAlbumCollectionPurchaseStatusesEnum `queryParam:"style=form,explode=true,name=purchaseStatuses"`
    Query *string `queryParam:"style=form,explode=true,name=query"`
    ReleaseEventID *int32 `queryParam:"style=form,explode=true,name=releaseEventId"`
    Sort *UserAPIGetAlbumCollectionSortEnum `queryParam:"style=form,explode=true,name=sort"`
    Start *int32 `queryParam:"style=form,explode=true,name=start"`
    Tag *string `queryParam:"style=form,explode=true,name=tag"`
    TagID *int32 `queryParam:"style=form,explode=true,name=tagId"`
    
}

type UserAPIGetAlbumCollectionRequest struct {
    PathParams UserAPIGetAlbumCollectionPathParams 
    QueryParams UserAPIGetAlbumCollectionQueryParams 
    
}

type UserAPIGetAlbumCollectionResponse struct {
    Body []byte 
    ContentType string 
    PartialFindResultAlbumForUserForAPIContract *shared.PartialFindResultAlbumForUserForAPIContract 
    StatusCode int64 
    
}

