package shared

import (
	"time"
)

type ArtistForAPIContractArtistTypeEnum string

const (
	ArtistForAPIContractArtistTypeEnumUnknown               ArtistForAPIContractArtistTypeEnum = "Unknown"
	ArtistForAPIContractArtistTypeEnumCircle                ArtistForAPIContractArtistTypeEnum = "Circle"
	ArtistForAPIContractArtistTypeEnumLabel                 ArtistForAPIContractArtistTypeEnum = "Label"
	ArtistForAPIContractArtistTypeEnumProducer              ArtistForAPIContractArtistTypeEnum = "Producer"
	ArtistForAPIContractArtistTypeEnumAnimator              ArtistForAPIContractArtistTypeEnum = "Animator"
	ArtistForAPIContractArtistTypeEnumIllustrator           ArtistForAPIContractArtistTypeEnum = "Illustrator"
	ArtistForAPIContractArtistTypeEnumLyricist              ArtistForAPIContractArtistTypeEnum = "Lyricist"
	ArtistForAPIContractArtistTypeEnumVocaloid              ArtistForAPIContractArtistTypeEnum = "Vocaloid"
	ArtistForAPIContractArtistTypeEnumUtau                  ArtistForAPIContractArtistTypeEnum = "UTAU"
	ArtistForAPIContractArtistTypeEnumCeVio                 ArtistForAPIContractArtistTypeEnum = "CeVIO"
	ArtistForAPIContractArtistTypeEnumOtherVoiceSynthesizer ArtistForAPIContractArtistTypeEnum = "OtherVoiceSynthesizer"
	ArtistForAPIContractArtistTypeEnumOtherVocalist         ArtistForAPIContractArtistTypeEnum = "OtherVocalist"
	ArtistForAPIContractArtistTypeEnumOtherGroup            ArtistForAPIContractArtistTypeEnum = "OtherGroup"
	ArtistForAPIContractArtistTypeEnumOtherIndividual       ArtistForAPIContractArtistTypeEnum = "OtherIndividual"
	ArtistForAPIContractArtistTypeEnumUtaite                ArtistForAPIContractArtistTypeEnum = "Utaite"
	ArtistForAPIContractArtistTypeEnumBand                  ArtistForAPIContractArtistTypeEnum = "Band"
	ArtistForAPIContractArtistTypeEnumVocalist              ArtistForAPIContractArtistTypeEnum = "Vocalist"
	ArtistForAPIContractArtistTypeEnumCharacter             ArtistForAPIContractArtistTypeEnum = "Character"
	ArtistForAPIContractArtistTypeEnumSynthesizerV          ArtistForAPIContractArtistTypeEnum = "SynthesizerV"
)

type ArtistForAPIContractDefaultNameLanguageEnum string

const (
	ArtistForAPIContractDefaultNameLanguageEnumUnspecified ArtistForAPIContractDefaultNameLanguageEnum = "Unspecified"
	ArtistForAPIContractDefaultNameLanguageEnumJapanese    ArtistForAPIContractDefaultNameLanguageEnum = "Japanese"
	ArtistForAPIContractDefaultNameLanguageEnumRomaji      ArtistForAPIContractDefaultNameLanguageEnum = "Romaji"
	ArtistForAPIContractDefaultNameLanguageEnumEnglish     ArtistForAPIContractDefaultNameLanguageEnum = "English"
)

type ArtistForAPIContractStatusEnum string

const (
	ArtistForAPIContractStatusEnumDraft    ArtistForAPIContractStatusEnum = "Draft"
	ArtistForAPIContractStatusEnumFinished ArtistForAPIContractStatusEnum = "Finished"
	ArtistForAPIContractStatusEnumApproved ArtistForAPIContractStatusEnum = "Approved"
	ArtistForAPIContractStatusEnumLocked   ArtistForAPIContractStatusEnum = "Locked"
)

type ArtistForAPIContract struct {
	AdditionalNames     *string                                      `json:"additionalNames"`
	ArtistLinks         []ArtistForArtistForAPIContract              `json:"artistLinks"`
	ArtistLinksReverse  []ArtistForArtistForAPIContract              `json:"artistLinksReverse"`
	ArtistType          *ArtistForAPIContractArtistTypeEnum          `json:"artistType"`
	BaseVoicebank       *ArtistContract                              `json:"baseVoicebank"`
	CreateDate          *time.Time                                   `json:"createDate"`
	DefaultName         *string                                      `json:"defaultName"`
	DefaultNameLanguage *ArtistForAPIContractDefaultNameLanguageEnum `json:"defaultNameLanguage"`
	Deleted             *bool                                        `json:"deleted"`
	Description         *string                                      `json:"description"`
	ID                  *int32                                       `json:"id"`
	MainPicture         *EntryThumbForAPIContract                    `json:"mainPicture"`
	MergedTo            *int32                                       `json:"mergedTo"`
	Name                *string                                      `json:"name"`
	Names               []LocalizedStringContract                    `json:"names"`
	PictureMime         *string                                      `json:"pictureMime"`
	Relations           *ArtistRelationsForAPI                       `json:"relations"`
	ReleaseDate         *time.Time                                   `json:"releaseDate"`
	Status              *ArtistForAPIContractStatusEnum              `json:"status"`
	Tags                []TagUsageForAPIContract                     `json:"tags"`
	Version             *int32                                       `json:"version"`
	WebLinks            []WebLinkForAPIContract                      `json:"webLinks"`
}
