package operations

type SearchWordsPathParams struct {
	Query string `pathParam:"style=simple,explode=false,name=query"`
}

type SearchWordsQueryParams struct {
	AllowRegex          *string `queryParam:"style=form,explode=true,name=allowRegex"`
	CaseSensitive       *string `queryParam:"style=form,explode=true,name=caseSensitive"`
	ExcludePartOfSpeech *string `queryParam:"style=form,explode=true,name=excludePartOfSpeech"`
	IncludePartOfSpeech *string `queryParam:"style=form,explode=true,name=includePartOfSpeech"`
	Limit               *int32  `queryParam:"style=form,explode=true,name=limit"`
	MaxCorpusCount      *int32  `queryParam:"style=form,explode=true,name=maxCorpusCount"`
	MaxDictionaryCount  *int32  `queryParam:"style=form,explode=true,name=maxDictionaryCount"`
	MaxLength           *int32  `queryParam:"style=form,explode=true,name=maxLength"`
	MinCorpusCount      *int32  `queryParam:"style=form,explode=true,name=minCorpusCount"`
	MinDictionaryCount  *int32  `queryParam:"style=form,explode=true,name=minDictionaryCount"`
	MinLength           *int32  `queryParam:"style=form,explode=true,name=minLength"`
	Skip                *int32  `queryParam:"style=form,explode=true,name=skip"`
}

type SearchWordsRequest struct {
	PathParams  SearchWordsPathParams
	QueryParams SearchWordsQueryParams
}

type SearchWordsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
