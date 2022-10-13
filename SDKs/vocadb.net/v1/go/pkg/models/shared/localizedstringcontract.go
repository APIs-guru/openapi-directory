package shared

type LocalizedStringContractLanguageEnum string

const (
	LocalizedStringContractLanguageEnumUnspecified LocalizedStringContractLanguageEnum = "Unspecified"
	LocalizedStringContractLanguageEnumJapanese    LocalizedStringContractLanguageEnum = "Japanese"
	LocalizedStringContractLanguageEnumRomaji      LocalizedStringContractLanguageEnum = "Romaji"
	LocalizedStringContractLanguageEnumEnglish     LocalizedStringContractLanguageEnum = "English"
)

type LocalizedStringContract struct {
	Language *LocalizedStringContractLanguageEnum `json:"language"`
	Value    *string                              `json:"value"`
}
