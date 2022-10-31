package operations

type GetAPIV1EnvironmentsEnvironmentIDStatePathParams struct {
	EnvironmentID string `pathParam:"style=simple,explode=false,name=environmentId"`
}

type GetAPIV1EnvironmentsEnvironmentIDStateRequest struct {
	PathParams GetAPIV1EnvironmentsEnvironmentIDStatePathParams
}

type GetAPIV1EnvironmentsEnvironmentIDStateResponse struct {
	Body           []byte
	ContentType    string
	ProblemDetails map[string]interface{}
	StatusCode     int64
}
