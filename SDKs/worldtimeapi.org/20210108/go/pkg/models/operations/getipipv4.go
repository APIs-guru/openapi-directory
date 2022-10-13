package operations

type GetIPIpv4PathParams struct {
	Ipv4 string `pathParam:"style=simple,explode=false,name=ipv4"`
}

type GetIPIpv4Request struct {
	PathParams GetIPIpv4PathParams
}

type GetIPIpv4Response struct {
	ContentType          string
	DateTimeJSONResponse *interface{}
	ErrorJSONResponse    *interface{}
	StatusCode           int64
}
