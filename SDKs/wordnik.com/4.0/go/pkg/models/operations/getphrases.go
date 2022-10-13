package operations

type GetPhrasesPathParams struct {
	Word string `pathParam:"style=simple,explode=false,name=word"`
}

type GetPhrasesUseCanonicalEnum string

const (
	GetPhrasesUseCanonicalEnumFalse GetPhrasesUseCanonicalEnum = "false"
	GetPhrasesUseCanonicalEnumTrue  GetPhrasesUseCanonicalEnum = "true"
)

type GetPhrasesQueryParams struct {
	Limit        *int32                      `queryParam:"style=form,explode=true,name=limit"`
	UseCanonical *GetPhrasesUseCanonicalEnum `queryParam:"style=form,explode=true,name=useCanonical"`
	Wlmi         *int32                      `queryParam:"style=form,explode=true,name=wlmi"`
}

type GetPhrasesRequest struct {
	PathParams  GetPhrasesPathParams
	QueryParams GetPhrasesQueryParams
}

type GetPhrasesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
