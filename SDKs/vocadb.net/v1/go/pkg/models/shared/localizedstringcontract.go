package shared

type LocalizedStringContractLanguageEnum string

const (
	LocalizedStringContractLanguageEnumUnspecified LocalizedStringContractLanguageEnum = "Unspecified"
	LocalizedStringContractLanguageEnumJapanese    LocalizedStringContractLanguageEnum = "Japanese"
	LocalizedStringContractLanguageEnumRomaji      LocalizedStringContractLanguageEnum = "Romaji"
	LocalizedStringContractLanguageEnumEnglish     LocalizedStringContractLanguageEnum = "English"
)

type LocalizedStringContract struct {
	Language *LocalizedStringContractLanguageEnum `json:"language,omitempty"`
	Value    *string                              `json:"value,omitempty"`
}
