package shared




type LocalizedStringWithIDContractLanguageEnum string

const (
    LocalizedStringWithIDContractLanguageEnumUnspecified LocalizedStringWithIDContractLanguageEnum = "Unspecified"
LocalizedStringWithIDContractLanguageEnumJapanese LocalizedStringWithIDContractLanguageEnum = "Japanese"
LocalizedStringWithIDContractLanguageEnumRomaji LocalizedStringWithIDContractLanguageEnum = "Romaji"
LocalizedStringWithIDContractLanguageEnumEnglish LocalizedStringWithIDContractLanguageEnum = "English"
)


type LocalizedStringWithIDContract struct {
    ID *int32 `json:"id,omitempty"`
    Language *LocalizedStringWithIDContractLanguageEnum `json:"language,omitempty"`
    Value *string `json:"value,omitempty"`
    
}

