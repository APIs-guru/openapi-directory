package shared




type LyricsForSongContractTranslationTypeEnum string

const (
    LyricsForSongContractTranslationTypeEnumOriginal LyricsForSongContractTranslationTypeEnum = "Original"
LyricsForSongContractTranslationTypeEnumRomanized LyricsForSongContractTranslationTypeEnum = "Romanized"
LyricsForSongContractTranslationTypeEnumTranslation LyricsForSongContractTranslationTypeEnum = "Translation"
)


type LyricsForSongContract struct {
    CultureCode *string `json:"cultureCode,omitempty"`
    ID *int32 `json:"id,omitempty"`
    Source *string `json:"source,omitempty"`
    TranslationType *LyricsForSongContractTranslationTypeEnum `json:"translationType,omitempty"`
    URL *string `json:"url,omitempty"`
    Value *string `json:"value,omitempty"`
    
}

