package shared

type UpdatePoolGroupBody struct {
	DisplayName string            `json:"displayName"`
	Tags        map[string]string `json:"tags"`
}
