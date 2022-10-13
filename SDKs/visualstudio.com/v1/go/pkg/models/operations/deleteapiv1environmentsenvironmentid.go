package operations

type DeleteAPIV1EnvironmentsEnvironmentIDPathParams struct {
	EnvironmentID string `pathParam:"style=simple,explode=false,name=environmentId"`
}

type DeleteAPIV1EnvironmentsEnvironmentIDRequest struct {
	PathParams DeleteAPIV1EnvironmentsEnvironmentIDPathParams
}

type DeleteAPIV1EnvironmentsEnvironmentIDResponse struct {
	Body           []byte
	ContentType    string
	ProblemDetails map[string]interface{}
	StatusCode     int64
}
