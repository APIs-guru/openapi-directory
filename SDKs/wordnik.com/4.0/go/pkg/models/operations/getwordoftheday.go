package operations

type GetWordOfTheDayQueryParams struct {
	Date *string `queryParam:"style=form,explode=true,name=date"`
}

type GetWordOfTheDayRequest struct {
	QueryParams GetWordOfTheDayQueryParams
}

type GetWordOfTheDayResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
