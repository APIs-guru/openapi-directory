package operations

type CacheNonceGetPathParams struct {
	Nonce string `pathParam:"style=simple,explode=false,name=nonce"`
}

type CacheNonceGetRequest struct {
	PathParams CacheNonceGetPathParams
}

type CacheNonceGetResponse struct {
	ContentType   string
	LoginButton   *string
	StatusCode    int64
	ProblemDetail *interface{}
}
