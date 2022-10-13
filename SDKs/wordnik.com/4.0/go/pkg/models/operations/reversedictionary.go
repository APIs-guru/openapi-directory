package operations

type ReverseDictionaryExcludeSourceDictionariesEnum string

const (
	ReverseDictionaryExcludeSourceDictionariesEnumAhd        ReverseDictionaryExcludeSourceDictionariesEnum = "ahd"
	ReverseDictionaryExcludeSourceDictionariesEnumCentury    ReverseDictionaryExcludeSourceDictionariesEnum = "century"
	ReverseDictionaryExcludeSourceDictionariesEnumCmu        ReverseDictionaryExcludeSourceDictionariesEnum = "cmu"
	ReverseDictionaryExcludeSourceDictionariesEnumMacmillan  ReverseDictionaryExcludeSourceDictionariesEnum = "macmillan"
	ReverseDictionaryExcludeSourceDictionariesEnumWiktionary ReverseDictionaryExcludeSourceDictionariesEnum = "wiktionary"
	ReverseDictionaryExcludeSourceDictionariesEnumWebster    ReverseDictionaryExcludeSourceDictionariesEnum = "webster"
	ReverseDictionaryExcludeSourceDictionariesEnumWordnet    ReverseDictionaryExcludeSourceDictionariesEnum = "wordnet"
)

type ReverseDictionaryIncludeSourceDictionariesEnum string

const (
	ReverseDictionaryIncludeSourceDictionariesEnumAhd        ReverseDictionaryIncludeSourceDictionariesEnum = "ahd"
	ReverseDictionaryIncludeSourceDictionariesEnumCentury    ReverseDictionaryIncludeSourceDictionariesEnum = "century"
	ReverseDictionaryIncludeSourceDictionariesEnumCmu        ReverseDictionaryIncludeSourceDictionariesEnum = "cmu"
	ReverseDictionaryIncludeSourceDictionariesEnumMacmillan  ReverseDictionaryIncludeSourceDictionariesEnum = "macmillan"
	ReverseDictionaryIncludeSourceDictionariesEnumWiktionary ReverseDictionaryIncludeSourceDictionariesEnum = "wiktionary"
	ReverseDictionaryIncludeSourceDictionariesEnumWebster    ReverseDictionaryIncludeSourceDictionariesEnum = "webster"
	ReverseDictionaryIncludeSourceDictionariesEnumWordnet    ReverseDictionaryIncludeSourceDictionariesEnum = "wordnet"
)

type ReverseDictionaryIncludeTagsEnum string

const (
	ReverseDictionaryIncludeTagsEnumFalse ReverseDictionaryIncludeTagsEnum = "false"
	ReverseDictionaryIncludeTagsEnumTrue  ReverseDictionaryIncludeTagsEnum = "true"
)

type ReverseDictionarySortByEnum string

const (
	ReverseDictionarySortByEnumAlpha ReverseDictionarySortByEnum = "alpha"
	ReverseDictionarySortByEnumCount ReverseDictionarySortByEnum = "count"
)

type ReverseDictionarySortOrderEnum string

const (
	ReverseDictionarySortOrderEnumAsc  ReverseDictionarySortOrderEnum = "asc"
	ReverseDictionarySortOrderEnumDesc ReverseDictionarySortOrderEnum = "desc"
)

type ReverseDictionaryQueryParams struct {
	ExcludePartOfSpeech       *string                                         `queryParam:"style=form,explode=true,name=excludePartOfSpeech"`
	ExcludeSourceDictionaries *ReverseDictionaryExcludeSourceDictionariesEnum `queryParam:"style=form,explode=true,name=excludeSourceDictionaries"`
	ExpandTerms               *string                                         `queryParam:"style=form,explode=true,name=expandTerms"`
	FindSenseForWord          *string                                         `queryParam:"style=form,explode=true,name=findSenseForWord"`
	IncludePartOfSpeech       *string                                         `queryParam:"style=form,explode=true,name=includePartOfSpeech"`
	IncludeSourceDictionaries *ReverseDictionaryIncludeSourceDictionariesEnum `queryParam:"style=form,explode=true,name=includeSourceDictionaries"`
	IncludeTags               *ReverseDictionaryIncludeTagsEnum               `queryParam:"style=form,explode=true,name=includeTags"`
	Limit                     *int32                                          `queryParam:"style=form,explode=true,name=limit"`
	MaxCorpusCount            *int32                                          `queryParam:"style=form,explode=true,name=maxCorpusCount"`
	MaxLength                 *int32                                          `queryParam:"style=form,explode=true,name=maxLength"`
	MinCorpusCount            *int32                                          `queryParam:"style=form,explode=true,name=minCorpusCount"`
	MinLength                 *int32                                          `queryParam:"style=form,explode=true,name=minLength"`
	Query                     string                                          `queryParam:"style=form,explode=true,name=query"`
	Skip                      *string                                         `queryParam:"style=form,explode=true,name=skip"`
	SortBy                    *ReverseDictionarySortByEnum                    `queryParam:"style=form,explode=true,name=sortBy"`
	SortOrder                 *ReverseDictionarySortOrderEnum                 `queryParam:"style=form,explode=true,name=sortOrder"`
}

type ReverseDictionaryRequest struct {
	QueryParams ReverseDictionaryQueryParams
}

type ReverseDictionaryResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
