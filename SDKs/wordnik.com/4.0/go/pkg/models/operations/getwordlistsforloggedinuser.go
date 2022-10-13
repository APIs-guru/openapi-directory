package operations

type GetWordListsForLoggedInUserQueryParams struct {
	Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
	Skip  *int32 `queryParam:"style=form,explode=true,name=skip"`
}

type GetWordListsForLoggedInUserHeaders struct {
	AuthToken string `header:"name=auth_token"`
}

type GetWordListsForLoggedInUserRequest struct {
	QueryParams GetWordListsForLoggedInUserQueryParams
	Headers     GetWordListsForLoggedInUserHeaders
}

type GetWordListsForLoggedInUserResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
