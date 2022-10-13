package operations

type HealthGetResponse struct {
	Body        []byte
	ContentType string
	Object      map[string]interface{}
	StatusCode  int64
}
