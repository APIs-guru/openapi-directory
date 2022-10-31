package operations

type GetWordListWordsPathParams struct {
	Permalink string `pathParam:"style=simple,explode=false,name=permalink"`
}

type GetWordListWordsSortByEnum string

const (
	GetWordListWordsSortByEnumCreateDate GetWordListWordsSortByEnum = "createDate"
	GetWordListWordsSortByEnumAlpha      GetWordListWordsSortByEnum = "alpha"
)

type GetWordListWordsQueryParams struct {
	Limit     *int32                      `queryParam:"style=form,explode=true,name=limit"`
	Skip      *int32                      `queryParam:"style=form,explode=true,name=skip"`
	SortBy    *GetWordListWordsSortByEnum `queryParam:"style=form,explode=true,name=sortBy"`
	SortOrder *string                     `queryParam:"style=form,explode=true,name=sortOrder"`
}

type GetWordListWordsHeaders struct {
	AuthToken string `header:"style=simple,explode=false,name=auth_token"`
}

type GetWordListWordsRequest struct {
	PathParams  GetWordListWordsPathParams
	QueryParams GetWordListWordsQueryParams
	Headers     GetWordListWordsHeaders
}

type GetWordListWordsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
