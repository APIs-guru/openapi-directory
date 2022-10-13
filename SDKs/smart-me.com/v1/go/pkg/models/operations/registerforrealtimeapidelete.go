package operations

type RegisterForRealtimeAPIDeletePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type RegisterForRealtimeAPIDeleteRequest struct {
	PathParams RegisterForRealtimeAPIDeletePathParams
}

type RegisterForRealtimeAPIDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
