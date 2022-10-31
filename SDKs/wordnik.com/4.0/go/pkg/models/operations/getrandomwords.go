package operations

type GetRandomWordsSortByEnum string

const (
	GetRandomWordsSortByEnumAlpha GetRandomWordsSortByEnum = "alpha"
	GetRandomWordsSortByEnumCount GetRandomWordsSortByEnum = "count"
)

type GetRandomWordsSortOrderEnum string

const (
	GetRandomWordsSortOrderEnumAsc  GetRandomWordsSortOrderEnum = "asc"
	GetRandomWordsSortOrderEnumDesc GetRandomWordsSortOrderEnum = "desc"
)

type GetRandomWordsQueryParams struct {
	ExcludePartOfSpeech *string                      `queryParam:"style=form,explode=true,name=excludePartOfSpeech"`
	HasDictionaryDef    *string                      `queryParam:"style=form,explode=true,name=hasDictionaryDef"`
	IncludePartOfSpeech *string                      `queryParam:"style=form,explode=true,name=includePartOfSpeech"`
	Limit               *int32                       `queryParam:"style=form,explode=true,name=limit"`
	MaxCorpusCount      *int32                       `queryParam:"style=form,explode=true,name=maxCorpusCount"`
	MaxDictionaryCount  *int32                       `queryParam:"style=form,explode=true,name=maxDictionaryCount"`
	MaxLength           *int32                       `queryParam:"style=form,explode=true,name=maxLength"`
	MinCorpusCount      *int32                       `queryParam:"style=form,explode=true,name=minCorpusCount"`
	MinDictionaryCount  *int32                       `queryParam:"style=form,explode=true,name=minDictionaryCount"`
	MinLength           *int32                       `queryParam:"style=form,explode=true,name=minLength"`
	SortBy              *GetRandomWordsSortByEnum    `queryParam:"style=form,explode=true,name=sortBy"`
	SortOrder           *GetRandomWordsSortOrderEnum `queryParam:"style=form,explode=true,name=sortOrder"`
}

type GetRandomWordsRequest struct {
	QueryParams GetRandomWordsQueryParams
}

type GetRandomWordsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
