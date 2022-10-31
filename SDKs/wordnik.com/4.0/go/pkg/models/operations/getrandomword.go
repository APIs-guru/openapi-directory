package operations

type GetRandomWordQueryParams struct {
	ExcludePartOfSpeech *string `queryParam:"style=form,explode=true,name=excludePartOfSpeech"`
	HasDictionaryDef    *string `queryParam:"style=form,explode=true,name=hasDictionaryDef"`
	IncludePartOfSpeech *string `queryParam:"style=form,explode=true,name=includePartOfSpeech"`
	MaxCorpusCount      *int32  `queryParam:"style=form,explode=true,name=maxCorpusCount"`
	MaxDictionaryCount  *int32  `queryParam:"style=form,explode=true,name=maxDictionaryCount"`
	MaxLength           *int32  `queryParam:"style=form,explode=true,name=maxLength"`
	MinCorpusCount      *int32  `queryParam:"style=form,explode=true,name=minCorpusCount"`
	MinDictionaryCount  *int32  `queryParam:"style=form,explode=true,name=minDictionaryCount"`
	MinLength           *int32  `queryParam:"style=form,explode=true,name=minLength"`
}

type GetRandomWordRequest struct {
	QueryParams GetRandomWordQueryParams
}

type GetRandomWordResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
