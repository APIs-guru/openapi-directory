package operations

type DeleteAPIV1EnvironmentsEnvironmentIDPortsPortPathParams struct {
	EnvironmentID string `pathParam:"style=simple,explode=false,name=environmentId"`
	Port          int32  `pathParam:"style=simple,explode=false,name=port"`
}

type DeleteAPIV1EnvironmentsEnvironmentIDPortsPortRequest struct {
	PathParams DeleteAPIV1EnvironmentsEnvironmentIDPortsPortPathParams
}

type DeleteAPIV1EnvironmentsEnvironmentIDPortsPortResponse struct {
	Body           []byte
	ContentType    string
	MessageCodes   *int32
	ProblemDetails map[string]interface{}
	StatusCode     int64
}
