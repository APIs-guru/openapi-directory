package operations

type GetLoggedInUserHeaders struct {
	AuthToken string `header:"name=auth_token"`
}

type GetLoggedInUserRequest struct {
	Headers GetLoggedInUserHeaders
}

type GetLoggedInUserResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
