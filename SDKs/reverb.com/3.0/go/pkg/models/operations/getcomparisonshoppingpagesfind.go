package operations

type GetComparisonShoppingPagesFindQueryParams struct {
	ID   *string `queryParam:"style=form,explode=true,name=id"`
	Slug *string `queryParam:"style=form,explode=true,name=slug"`
}

type GetComparisonShoppingPagesFindRequest struct {
	QueryParams GetComparisonShoppingPagesFindQueryParams
}

type GetComparisonShoppingPagesFindResponse struct {
	ContentType string
	StatusCode  int64
}
