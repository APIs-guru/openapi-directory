package shared

type LocalizedStringWithIDContractLanguageEnum string

const (
	LocalizedStringWithIDContractLanguageEnumUnspecified LocalizedStringWithIDContractLanguageEnum = "Unspecified"
	LocalizedStringWithIDContractLanguageEnumJapanese    LocalizedStringWithIDContractLanguageEnum = "Japanese"
	LocalizedStringWithIDContractLanguageEnumRomaji      LocalizedStringWithIDContractLanguageEnum = "Romaji"
	LocalizedStringWithIDContractLanguageEnumEnglish     LocalizedStringWithIDContractLanguageEnum = "English"
)

type LocalizedStringWithIDContract struct {
	ID       *int32                                     `json:"id"`
	Language *LocalizedStringWithIDContractLanguageEnum `json:"language"`
	Value    *string                                    `json:"value"`
}
