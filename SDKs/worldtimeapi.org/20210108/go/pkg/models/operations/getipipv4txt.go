package operations

type GetIPIpv4TxtPathParams struct {
	Ipv4 string `pathParam:"style=simple,explode=false,name=ipv4"`
}

type GetIPIpv4TxtRequest struct {
	PathParams GetIPIpv4TxtPathParams
}

type GetIPIpv4TxtResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
