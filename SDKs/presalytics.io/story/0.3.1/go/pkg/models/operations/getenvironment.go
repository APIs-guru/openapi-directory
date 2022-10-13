package operations

type GetEnvironmentResponse struct {
	ContentType                            string
	StatusCode                             int64
	GetEnvironment200ApplicationJSONObject map[string]interface{}
	ProblemDetail                          *interface{}
}
