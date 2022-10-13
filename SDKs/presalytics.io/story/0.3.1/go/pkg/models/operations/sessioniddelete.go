package operations

type SessionIDDeletePathParams struct {
	SessionID string `pathParam:"style=simple,explode=false,name=session_id"`
}

type SessionIDDeleteRequest struct {
	PathParams SessionIDDeletePathParams
}

type SessionIDDeleteResponse struct {
	ContentType   string
	StatusCode    int64
	ProblemDetail *interface{}
}
