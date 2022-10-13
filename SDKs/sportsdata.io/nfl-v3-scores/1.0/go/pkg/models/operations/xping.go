package operations

type XPingFormatEnum string

const (
	XPingFormatEnumXML  XPingFormatEnum = "XML"
	XPingFormatEnumJSON XPingFormatEnum = "JSON"
)

type XPingPathParams struct {
	Format  XPingFormatEnum `pathParam:"style=simple,explode=false,name=format"`
	Seconds string          `pathParam:"style=simple,explode=false,name=seconds"`
}

type XPingRequest struct {
	PathParams XPingPathParams
}

type XPingResponse struct {
	ContentType                string
	StatusCode                 int64
	XPing200ApplicationJSONAny *interface{}
}
