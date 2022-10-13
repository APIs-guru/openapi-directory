package shared

type LyricsForSongContractTranslationTypeEnum string

const (
	LyricsForSongContractTranslationTypeEnumOriginal    LyricsForSongContractTranslationTypeEnum = "Original"
	LyricsForSongContractTranslationTypeEnumRomanized   LyricsForSongContractTranslationTypeEnum = "Romanized"
	LyricsForSongContractTranslationTypeEnumTranslation LyricsForSongContractTranslationTypeEnum = "Translation"
)

type LyricsForSongContract struct {
	CultureCode     *string                                   `json:"cultureCode"`
	ID              *int32                                    `json:"id"`
	Source          *string                                   `json:"source"`
	TranslationType *LyricsForSongContractTranslationTypeEnum `json:"translationType"`
	URL             *string                                   `json:"url"`
	Value           *string                                   `json:"value"`
}
