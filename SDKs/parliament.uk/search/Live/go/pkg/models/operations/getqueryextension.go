package operations

type GetQueryExtensionExtensionEnum string

const (
	GetQueryExtensionExtensionEnumAtom GetQueryExtensionExtensionEnum = "atom"
	GetQueryExtensionExtensionEnumRss  GetQueryExtensionExtensionEnum = "rss"
	GetQueryExtensionExtensionEnumHTML GetQueryExtensionExtensionEnum = "html"
	GetQueryExtensionExtensionEnumJSON GetQueryExtensionExtensionEnum = "json"
)

type GetQueryExtensionPathParams struct {
	Extension GetQueryExtensionExtensionEnum `pathParam:"style=simple,explode=false,name=extension"`
}

type GetQueryExtensionQueryParams struct {
	Count         *float64 `queryParam:"style=form,explode=true,name=count"`
	InURLPrefixes *string  `queryParam:"style=form,explode=true,name=inUrlPrefixes"`
	Q             string   `queryParam:"style=form,explode=true,name=q"`
	Start         *float64 `queryParam:"style=form,explode=true,name=start"`
	Subdomains    *string  `queryParam:"style=form,explode=true,name=subdomains"`
}

type GetQueryExtensionRequest struct {
	PathParams  GetQueryExtensionPathParams
	QueryParams GetQueryExtensionQueryParams
}

type GetQueryExtensionResponse struct {
	ContentType string
	StatusCode  int64
}
