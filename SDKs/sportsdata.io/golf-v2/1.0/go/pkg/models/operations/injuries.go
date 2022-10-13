package operations

type InjuriesFormatEnum string

const (
	InjuriesFormatEnumXML  InjuriesFormatEnum = "XML"
	InjuriesFormatEnumJSON InjuriesFormatEnum = "JSON"
)

type InjuriesPathParams struct {
	Format InjuriesFormatEnum `pathParam:"style=simple,explode=false,name=format"`
}

type InjuriesRequest struct {
	PathParams InjuriesPathParams
}

type InjuriesResponse struct {
	ContentType string
	Injuries    []interface{}
	StatusCode  int64
}
