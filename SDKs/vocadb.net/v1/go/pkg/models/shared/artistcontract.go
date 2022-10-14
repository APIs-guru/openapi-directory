package shared

import (
	"time"
)

type ArtistContractArtistTypeEnum string

const (
	ArtistContractArtistTypeEnumUnknown               ArtistContractArtistTypeEnum = "Unknown"
	ArtistContractArtistTypeEnumCircle                ArtistContractArtistTypeEnum = "Circle"
	ArtistContractArtistTypeEnumLabel                 ArtistContractArtistTypeEnum = "Label"
	ArtistContractArtistTypeEnumProducer              ArtistContractArtistTypeEnum = "Producer"
	ArtistContractArtistTypeEnumAnimator              ArtistContractArtistTypeEnum = "Animator"
	ArtistContractArtistTypeEnumIllustrator           ArtistContractArtistTypeEnum = "Illustrator"
	ArtistContractArtistTypeEnumLyricist              ArtistContractArtistTypeEnum = "Lyricist"
	ArtistContractArtistTypeEnumVocaloid              ArtistContractArtistTypeEnum = "Vocaloid"
	ArtistContractArtistTypeEnumUtau                  ArtistContractArtistTypeEnum = "UTAU"
	ArtistContractArtistTypeEnumCeVio                 ArtistContractArtistTypeEnum = "CeVIO"
	ArtistContractArtistTypeEnumOtherVoiceSynthesizer ArtistContractArtistTypeEnum = "OtherVoiceSynthesizer"
	ArtistContractArtistTypeEnumOtherVocalist         ArtistContractArtistTypeEnum = "OtherVocalist"
	ArtistContractArtistTypeEnumOtherGroup            ArtistContractArtistTypeEnum = "OtherGroup"
	ArtistContractArtistTypeEnumOtherIndividual       ArtistContractArtistTypeEnum = "OtherIndividual"
	ArtistContractArtistTypeEnumUtaite                ArtistContractArtistTypeEnum = "Utaite"
	ArtistContractArtistTypeEnumBand                  ArtistContractArtistTypeEnum = "Band"
	ArtistContractArtistTypeEnumVocalist              ArtistContractArtistTypeEnum = "Vocalist"
	ArtistContractArtistTypeEnumCharacter             ArtistContractArtistTypeEnum = "Character"
	ArtistContractArtistTypeEnumSynthesizerV          ArtistContractArtistTypeEnum = "SynthesizerV"
)

type ArtistContractStatusEnum string

const (
	ArtistContractStatusEnumDraft    ArtistContractStatusEnum = "Draft"
	ArtistContractStatusEnumFinished ArtistContractStatusEnum = "Finished"
	ArtistContractStatusEnumApproved ArtistContractStatusEnum = "Approved"
	ArtistContractStatusEnumLocked   ArtistContractStatusEnum = "Locked"
)

type ArtistContract struct {
	AdditionalNames *string                       `json:"additionalNames,omitempty"`
	ArtistType      *ArtistContractArtistTypeEnum `json:"artistType,omitempty"`
	Deleted         *bool                         `json:"deleted,omitempty"`
	ID              *int32                        `json:"id,omitempty"`
	Name            *string                       `json:"name,omitempty"`
	PictureMime     *string                       `json:"pictureMime,omitempty"`
	ReleaseDate     *time.Time                    `json:"releaseDate,omitempty"`
	Status          *ArtistContractStatusEnum     `json:"status,omitempty"`
	Version         *int32                        `json:"version,omitempty"`
}
