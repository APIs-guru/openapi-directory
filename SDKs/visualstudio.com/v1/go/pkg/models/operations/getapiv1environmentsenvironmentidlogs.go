package operations

type GetAPIV1EnvironmentsEnvironmentIDLogsPathParams struct {
	EnvironmentID string `pathParam:"style=simple,explode=false,name=environmentId"`
}

type GetAPIV1EnvironmentsEnvironmentIDLogsRequest struct {
	PathParams GetAPIV1EnvironmentsEnvironmentIDLogsPathParams
}

type GetAPIV1EnvironmentsEnvironmentIDLogsResponse struct {
	Body                                                          []byte
	ContentType                                                   string
	GetAPIV1EnvironmentsEnvironmentIDLogs200ApplicationJSONString *string
	GetAPIV1EnvironmentsEnvironmentIDLogs200TextJSONString        *string
	ProblemDetails                                                map[string]interface{}
	StatusCode                                                    int64
}
