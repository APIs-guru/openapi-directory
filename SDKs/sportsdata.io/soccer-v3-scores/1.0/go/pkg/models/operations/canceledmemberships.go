package operations

type CanceledMembershipsFormatEnum string

const (
	CanceledMembershipsFormatEnumXML  CanceledMembershipsFormatEnum = "xml"
	CanceledMembershipsFormatEnumJSON CanceledMembershipsFormatEnum = "json"
)

type CanceledMembershipsPathParams struct {
	Format CanceledMembershipsFormatEnum `pathParam:"style=simple,explode=false,name=format"`
}

type CanceledMembershipsRequest struct {
	PathParams CanceledMembershipsPathParams
}

type CanceledMembershipsResponse struct {
	CanceledMembership *interface{}
	ContentType        string
	StatusCode         int64
}
