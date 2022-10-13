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
	AdditionalNames       *string                                   `json:"additionalNames"`
	AliasedTo             *TagBaseContract                          `json:"aliasedTo"`
	CategoryName          *string                                   `json:"categoryName"`
	CreateDate            *time.Time                                `json:"createDate"`
	DefaultNameLanguage   *TagForAPIContractDefaultNameLanguageEnum `json:"defaultNameLanguage"`
	Description           *string                                   `json:"description"`
	ID                    *int32                                    `json:"id"`
	MainPicture           *EntryThumbForAPIContract                 `json:"mainPicture"`
	Name                  *string                                   `json:"name"`
	Names                 []LocalizedStringWithIDContract           `json:"names"`
	Parent                *TagBaseContract                          `json:"parent"`
	RelatedTags           []TagBaseContract                         `json:"relatedTags"`
	Status                *TagForAPIContractStatusEnum              `json:"status"`
	Targets               *int32                                    `json:"targets"`
	TranslatedDescription *EnglishTranslatedStringContract          `json:"translatedDescription"`
	URLSlug               *string                                   `json:"urlSlug"`
	UsageCount            *int32                                    `json:"usageCount"`
	Version               *int32                                    `json:"version"`
	WebLinks              []WebLinkForAPIContract                   `json:"webLinks"`
}
