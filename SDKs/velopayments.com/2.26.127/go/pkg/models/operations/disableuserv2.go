package operations

type DisableUserV2PathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type DisableUserV2Request struct {
	PathParams DisableUserV2PathParams
}

type DisableUserV2Response struct {
	ContentType       string
	StatusCode        int64
	InlineResponse400 *interface{}
	InlineResponse401 *interface{}
	InlineResponse403 *interface{}
	InlineResponse404 *interface{}
}
