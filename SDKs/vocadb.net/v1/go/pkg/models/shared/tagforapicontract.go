package shared

import (
	"time"
)

type TagForAPIContractDefaultNameLanguageEnum string

const (
	TagForAPIContractDefaultNameLanguageEnumUnspecified TagForAPIContractDefaultNameLanguageEnum = "Unspecified"
	TagForAPIContractDefaultNameLanguageEnumJapanese    TagForAPIContractDefaultNameLanguageEnum = "Japanese"
	TagForAPIContractDefaultNameLanguageEnumRomaji      TagForAPIContractDefaultNameLanguageEnum = "Romaji"
	TagForAPIContractDefaultNameLanguageEnumEnglish     TagForAPIContractDefaultNameLanguageEnum = "English"
)

type TagForAPIContractStatusEnum string

const (
	TagForAPIContractStatusEnumDraft    TagForAPIContractStatusEnum = "Draft"
	TagForAPIContractStatusEnumFinished TagForAPIContractStatusEnum = "Finished"
	TagForAPIContractStatusEnumApproved TagForAPIContractStatusEnum = "Approved"
	TagForAPIContractStatusEnumLocked   TagForAPIContractStatusEnum = "Locked"
)

type TagForAPIContract struct {
	AdditionalNames       *string                                   `json:"additionalNames,omitempty"`
	AliasedTo             *TagBaseContract                          `json:"aliasedTo,omitempty"`
	CategoryName          *string                                   `json:"categoryName,omitempty"`
	CreateDate            *time.Time                                `json:"createDate,omitempty"`
	DefaultNameLanguage   *TagForAPIContractDefaultNameLanguageEnum `json:"defaultNameLanguage,omitempty"`
	Description           *string                                   `json:"description,omitempty"`
	ID                    *int32                                    `json:"id,omitempty"`
	MainPicture           *EntryThumbForAPIContract                 `json:"mainPicture,omitempty"`
	Name                  *string                                   `json:"name,omitempty"`
	Names                 []LocalizedStringWithIDContract           `json:"names,omitempty"`
	Parent                *TagBaseContract                          `json:"parent,omitempty"`
	RelatedTags           []TagBaseContract                         `json:"relatedTags,omitempty"`
	Status                *TagForAPIContractStatusEnum              `json:"status,omitempty"`
	Targets               *int32                                    `json:"targets,omitempty"`
	TranslatedDescription *EnglishTranslatedStringContract          `json:"translatedDescription,omitempty"`
	URLSlug               *string                                   `json:"urlSlug,omitempty"`
	UsageCount            *int32                                    `json:"usageCount,omitempty"`
	Version               *int32                                    `json:"version,omitempty"`
	WebLinks              []WebLinkForAPIContract                   `json:"webLinks,omitempty"`
}
