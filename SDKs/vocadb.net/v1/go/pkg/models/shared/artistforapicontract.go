package shared

import (
"time")


type ArtistForAPIContractArtistTypeEnum string

const (
    ArtistForAPIContractArtistTypeEnumUnknown ArtistForAPIContractArtistTypeEnum = "Unknown"
ArtistForAPIContractArtistTypeEnumCircle ArtistForAPIContractArtistTypeEnum = "Circle"
ArtistForAPIContractArtistTypeEnumLabel ArtistForAPIContractArtistTypeEnum = "Label"
ArtistForAPIContractArtistTypeEnumProducer ArtistForAPIContractArtistTypeEnum = "Producer"
ArtistForAPIContractArtistTypeEnumAnimator ArtistForAPIContractArtistTypeEnum = "Animator"
ArtistForAPIContractArtistTypeEnumIllustrator ArtistForAPIContractArtistTypeEnum = "Illustrator"
ArtistForAPIContractArtistTypeEnumLyricist ArtistForAPIContractArtistTypeEnum = "Lyricist"
ArtistForAPIContractArtistTypeEnumVocaloid ArtistForAPIContractArtistTypeEnum = "Vocaloid"
ArtistForAPIContractArtistTypeEnumUtau ArtistForAPIContractArtistTypeEnum = "UTAU"
ArtistForAPIContractArtistTypeEnumCeVio ArtistForAPIContractArtistTypeEnum = "CeVIO"
ArtistForAPIContractArtistTypeEnumOtherVoiceSynthesizer ArtistForAPIContractArtistTypeEnum = "OtherVoiceSynthesizer"
ArtistForAPIContractArtistTypeEnumOtherVocalist ArtistForAPIContractArtistTypeEnum = "OtherVocalist"
ArtistForAPIContractArtistTypeEnumOtherGroup ArtistForAPIContractArtistTypeEnum = "OtherGroup"
ArtistForAPIContractArtistTypeEnumOtherIndividual ArtistForAPIContractArtistTypeEnum = "OtherIndividual"
ArtistForAPIContractArtistTypeEnumUtaite ArtistForAPIContractArtistTypeEnum = "Utaite"
ArtistForAPIContractArtistTypeEnumBand ArtistForAPIContractArtistTypeEnum = "Band"
ArtistForAPIContractArtistTypeEnumVocalist ArtistForAPIContractArtistTypeEnum = "Vocalist"
ArtistForAPIContractArtistTypeEnumCharacter ArtistForAPIContractArtistTypeEnum = "Character"
ArtistForAPIContractArtistTypeEnumSynthesizerV ArtistForAPIContractArtistTypeEnum = "SynthesizerV"
)



type ArtistForAPIContractDefaultNameLanguageEnum string

const (
    ArtistForAPIContractDefaultNameLanguageEnumUnspecified ArtistForAPIContractDefaultNameLanguageEnum = "Unspecified"
ArtistForAPIContractDefaultNameLanguageEnumJapanese ArtistForAPIContractDefaultNameLanguageEnum = "Japanese"
ArtistForAPIContractDefaultNameLanguageEnumRomaji ArtistForAPIContractDefaultNameLanguageEnum = "Romaji"
ArtistForAPIContractDefaultNameLanguageEnumEnglish ArtistForAPIContractDefaultNameLanguageEnum = "English"
)



type ArtistForAPIContractStatusEnum string

const (
    ArtistForAPIContractStatusEnumDraft ArtistForAPIContractStatusEnum = "Draft"
ArtistForAPIContractStatusEnumFinished ArtistForAPIContractStatusEnum = "Finished"
ArtistForAPIContractStatusEnumApproved ArtistForAPIContractStatusEnum = "Approved"
ArtistForAPIContractStatusEnumLocked ArtistForAPIContractStatusEnum = "Locked"
)


type ArtistForAPIContract struct {
    AdditionalNames *string `json:"additionalNames,omitempty"`
    ArtistLinks []ArtistForArtistForAPIContract `json:"artistLinks,omitempty"`
    ArtistLinksReverse []ArtistForArtistForAPIContract `json:"artistLinksReverse,omitempty"`
    ArtistType *ArtistForAPIContractArtistTypeEnum `json:"artistType,omitempty"`
    BaseVoicebank *ArtistContract `json:"baseVoicebank,omitempty"`
    CreateDate *time.Time `json:"createDate,omitempty"`
    DefaultName *string `json:"defaultName,omitempty"`
    DefaultNameLanguage *ArtistForAPIContractDefaultNameLanguageEnum `json:"defaultNameLanguage,omitempty"`
    Deleted *bool `json:"deleted,omitempty"`
    Description *string `json:"description,omitempty"`
    ID *int32 `json:"id,omitempty"`
    MainPicture *EntryThumbForAPIContract `json:"mainPicture,omitempty"`
    MergedTo *int32 `json:"mergedTo,omitempty"`
    Name *string `json:"name,omitempty"`
    Names []LocalizedStringContract `json:"names,omitempty"`
    PictureMime *string `json:"pictureMime,omitempty"`
    Relations *ArtistRelationsForAPI `json:"relations,omitempty"`
    ReleaseDate *time.Time `json:"releaseDate,omitempty"`
    Status *ArtistForAPIContractStatusEnum `json:"status,omitempty"`
    Tags []TagUsageForAPIContract `json:"tags,omitempty"`
    Version *int32 `json:"version,omitempty"`
    WebLinks []WebLinkForAPIContract `json:"webLinks,omitempty"`
    
}

