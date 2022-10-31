package operations

import (
"openapi/pkg/models/shared")

type UserAPIGetFollowedArtistsPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}


type UserAPIGetFollowedArtistsArtistTypeEnum string

const (
    UserAPIGetFollowedArtistsArtistTypeEnumUnknown UserAPIGetFollowedArtistsArtistTypeEnum = "Unknown"
UserAPIGetFollowedArtistsArtistTypeEnumCircle UserAPIGetFollowedArtistsArtistTypeEnum = "Circle"
UserAPIGetFollowedArtistsArtistTypeEnumLabel UserAPIGetFollowedArtistsArtistTypeEnum = "Label"
UserAPIGetFollowedArtistsArtistTypeEnumProducer UserAPIGetFollowedArtistsArtistTypeEnum = "Producer"
UserAPIGetFollowedArtistsArtistTypeEnumAnimator UserAPIGetFollowedArtistsArtistTypeEnum = "Animator"
UserAPIGetFollowedArtistsArtistTypeEnumIllustrator UserAPIGetFollowedArtistsArtistTypeEnum = "Illustrator"
UserAPIGetFollowedArtistsArtistTypeEnumLyricist UserAPIGetFollowedArtistsArtistTypeEnum = "Lyricist"
UserAPIGetFollowedArtistsArtistTypeEnumVocaloid UserAPIGetFollowedArtistsArtistTypeEnum = "Vocaloid"
UserAPIGetFollowedArtistsArtistTypeEnumUtau UserAPIGetFollowedArtistsArtistTypeEnum = "UTAU"
UserAPIGetFollowedArtistsArtistTypeEnumCeVio UserAPIGetFollowedArtistsArtistTypeEnum = "CeVIO"
UserAPIGetFollowedArtistsArtistTypeEnumOtherVoiceSynthesizer UserAPIGetFollowedArtistsArtistTypeEnum = "OtherVoiceSynthesizer"
UserAPIGetFollowedArtistsArtistTypeEnumOtherVocalist UserAPIGetFollowedArtistsArtistTypeEnum = "OtherVocalist"
UserAPIGetFollowedArtistsArtistTypeEnumOtherGroup UserAPIGetFollowedArtistsArtistTypeEnum = "OtherGroup"
UserAPIGetFollowedArtistsArtistTypeEnumOtherIndividual UserAPIGetFollowedArtistsArtistTypeEnum = "OtherIndividual"
UserAPIGetFollowedArtistsArtistTypeEnumUtaite UserAPIGetFollowedArtistsArtistTypeEnum = "Utaite"
UserAPIGetFollowedArtistsArtistTypeEnumBand UserAPIGetFollowedArtistsArtistTypeEnum = "Band"
UserAPIGetFollowedArtistsArtistTypeEnumVocalist UserAPIGetFollowedArtistsArtistTypeEnum = "Vocalist"
UserAPIGetFollowedArtistsArtistTypeEnumCharacter UserAPIGetFollowedArtistsArtistTypeEnum = "Character"
UserAPIGetFollowedArtistsArtistTypeEnumSynthesizerV UserAPIGetFollowedArtistsArtistTypeEnum = "SynthesizerV"
)



type UserAPIGetFollowedArtistsFieldsEnum string

const (
    UserAPIGetFollowedArtistsFieldsEnumNone UserAPIGetFollowedArtistsFieldsEnum = "None"
UserAPIGetFollowedArtistsFieldsEnumAdditionalNames UserAPIGetFollowedArtistsFieldsEnum = "AdditionalNames"
UserAPIGetFollowedArtistsFieldsEnumArtistLinks UserAPIGetFollowedArtistsFieldsEnum = "ArtistLinks"
UserAPIGetFollowedArtistsFieldsEnumArtistLinksReverse UserAPIGetFollowedArtistsFieldsEnum = "ArtistLinksReverse"
UserAPIGetFollowedArtistsFieldsEnumBaseVoicebank UserAPIGetFollowedArtistsFieldsEnum = "BaseVoicebank"
UserAPIGetFollowedArtistsFieldsEnumDescription UserAPIGetFollowedArtistsFieldsEnum = "Description"
UserAPIGetFollowedArtistsFieldsEnumMainPicture UserAPIGetFollowedArtistsFieldsEnum = "MainPicture"
UserAPIGetFollowedArtistsFieldsEnumNames UserAPIGetFollowedArtistsFieldsEnum = "Names"
UserAPIGetFollowedArtistsFieldsEnumTags UserAPIGetFollowedArtistsFieldsEnum = "Tags"
UserAPIGetFollowedArtistsFieldsEnumWebLinks UserAPIGetFollowedArtistsFieldsEnum = "WebLinks"
)



type UserAPIGetFollowedArtistsLangEnum string

const (
    UserAPIGetFollowedArtistsLangEnumDefault UserAPIGetFollowedArtistsLangEnum = "Default"
UserAPIGetFollowedArtistsLangEnumJapanese UserAPIGetFollowedArtistsLangEnum = "Japanese"
UserAPIGetFollowedArtistsLangEnumRomaji UserAPIGetFollowedArtistsLangEnum = "Romaji"
UserAPIGetFollowedArtistsLangEnumEnglish UserAPIGetFollowedArtistsLangEnum = "English"
)



type UserAPIGetFollowedArtistsNameMatchModeEnum string

const (
    UserAPIGetFollowedArtistsNameMatchModeEnumAuto UserAPIGetFollowedArtistsNameMatchModeEnum = "Auto"
UserAPIGetFollowedArtistsNameMatchModeEnumPartial UserAPIGetFollowedArtistsNameMatchModeEnum = "Partial"
UserAPIGetFollowedArtistsNameMatchModeEnumStartsWith UserAPIGetFollowedArtistsNameMatchModeEnum = "StartsWith"
UserAPIGetFollowedArtistsNameMatchModeEnumExact UserAPIGetFollowedArtistsNameMatchModeEnum = "Exact"
UserAPIGetFollowedArtistsNameMatchModeEnumWords UserAPIGetFollowedArtistsNameMatchModeEnum = "Words"
)



type UserAPIGetFollowedArtistsSortEnum string

const (
    UserAPIGetFollowedArtistsSortEnumNone UserAPIGetFollowedArtistsSortEnum = "None"
UserAPIGetFollowedArtistsSortEnumName UserAPIGetFollowedArtistsSortEnum = "Name"
UserAPIGetFollowedArtistsSortEnumAdditionDate UserAPIGetFollowedArtistsSortEnum = "AdditionDate"
UserAPIGetFollowedArtistsSortEnumAdditionDateAsc UserAPIGetFollowedArtistsSortEnum = "AdditionDateAsc"
UserAPIGetFollowedArtistsSortEnumReleaseDate UserAPIGetFollowedArtistsSortEnum = "ReleaseDate"
UserAPIGetFollowedArtistsSortEnumSongCount UserAPIGetFollowedArtistsSortEnum = "SongCount"
UserAPIGetFollowedArtistsSortEnumSongRating UserAPIGetFollowedArtistsSortEnum = "SongRating"
UserAPIGetFollowedArtistsSortEnumFollowerCount UserAPIGetFollowedArtistsSortEnum = "FollowerCount"
)


type UserAPIGetFollowedArtistsQueryParams struct {
    ArtistType *UserAPIGetFollowedArtistsArtistTypeEnum `queryParam:"style=form,explode=true,name=artistType"`
    Fields *UserAPIGetFollowedArtistsFieldsEnum `queryParam:"style=form,explode=true,name=fields"`
    GetTotalCount *bool `queryParam:"style=form,explode=true,name=getTotalCount"`
    Lang *UserAPIGetFollowedArtistsLangEnum `queryParam:"style=form,explode=true,name=lang"`
    MaxResults *int32 `queryParam:"style=form,explode=true,name=maxResults"`
    NameMatchMode *UserAPIGetFollowedArtistsNameMatchModeEnum `queryParam:"style=form,explode=true,name=nameMatchMode"`
    Query *string `queryParam:"style=form,explode=true,name=query"`
    Sort *UserAPIGetFollowedArtistsSortEnum `queryParam:"style=form,explode=true,name=sort"`
    Start *int32 `queryParam:"style=form,explode=true,name=start"`
    TagID []int32 `queryParam:"style=form,explode=true,name=tagId"`
    
}

type UserAPIGetFollowedArtistsRequest struct {
    PathParams UserAPIGetFollowedArtistsPathParams 
    QueryParams UserAPIGetFollowedArtistsQueryParams 
    
}

type UserAPIGetFollowedArtistsResponse struct {
    Body []byte 
    ContentType string 
    PartialFindResultArtistForUserForAPIContract *shared.PartialFindResultArtistForUserForAPIContract 
    StatusCode int64 
    
}

