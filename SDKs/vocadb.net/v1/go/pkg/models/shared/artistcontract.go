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
	AdditionalNames *string                       `json:"additionalNames"`
	ArtistType      *ArtistContractArtistTypeEnum `json:"artistType"`
	Deleted         *bool                         `json:"deleted"`
	ID              *int32                        `json:"id"`
	Name            *string                       `json:"name"`
	PictureMime     *string                       `json:"pictureMime"`
	ReleaseDate     *time.Time                    `json:"releaseDate"`
	Status          *ArtistContractStatusEnum     `json:"status"`
	Version         *int32                        `json:"version"`
}
