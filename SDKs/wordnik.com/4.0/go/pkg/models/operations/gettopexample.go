package operations

type GetTopExamplePathParams struct {
	Word string `pathParam:"style=simple,explode=false,name=word"`
}

type GetTopExampleUseCanonicalEnum string

const (
	GetTopExampleUseCanonicalEnumFalse GetTopExampleUseCanonicalEnum = "false"
	GetTopExampleUseCanonicalEnumTrue  GetTopExampleUseCanonicalEnum = "true"
)

type GetTopExampleQueryParams struct {
	UseCanonical *GetTopExampleUseCanonicalEnum `queryParam:"style=form,explode=true,name=useCanonical"`
}

type GetTopExampleRequest struct {
	PathParams  GetTopExamplePathParams
	QueryParams GetTopExampleQueryParams
}

type GetTopExampleResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
