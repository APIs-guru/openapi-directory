package operations

type PostAdminRecordingsStartRequestBodyCaptureHeaders struct {
	CaseInsensitive *bool `json:"caseInsensitive"`
}

type PostAdminRecordingsStartRequestBodyExtractBodyCriteria struct {
	BinarySizeThreshold *string `json:"binarySizeThreshold"`
	TextSizeThreshold   *string `json:"textSizeThreshold"`
}

type PostAdminRecordingsStartRequestBodyFiltersBasicAuthCredentials struct {
	Password string `json:"password"`
	Username string `json:"username"`
}

type PostAdminRecordingsStartRequestBodyFilters struct {
	BasicAuthCredentials *PostAdminRecordingsStartRequestBodyFiltersBasicAuthCredentials `json:"basicAuthCredentials"`
	BodyPatterns         []map[string]interface{}                                        `json:"bodyPatterns"`
	Cookies              map[string]interface{}                                          `json:"cookies"`
	Headers              map[string]interface{}                                          `json:"headers"`
	Method               *string                                                         `json:"method"`
	QueryParameters      map[string]interface{}                                          `json:"queryParameters"`
	URL                  *string                                                         `json:"url"`
	URLPath              *string                                                         `json:"urlPath"`
	URLPathPattern       *string                                                         `json:"urlPathPattern"`
	URLPattern           *string                                                         `json:"urlPattern"`
}

type PostAdminRecordingsStartRequestBody struct {
	CaptureHeaders        map[string]PostAdminRecordingsStartRequestBodyCaptureHeaders `json:"captureHeaders"`
	ExtractBodyCriteria   *PostAdminRecordingsStartRequestBodyExtractBodyCriteria      `json:"extractBodyCriteria"`
	Filters               *PostAdminRecordingsStartRequestBodyFilters                  `json:"filters"`
	Persist               *bool                                                        `json:"persist"`
	RepeatsAsScenarios    *bool                                                        `json:"repeatsAsScenarios"`
	RequestBodyPattern    map[string]interface{}                                       `json:"requestBodyPattern"`
	TargetBaseURL         *string                                                      `json:"targetBaseUrl"`
	TransformerParameters map[string]interface{}                                       `json:"transformerParameters"`
	Transformers          []string                                                     `json:"transformers"`
}

type PostAdminRecordingsStartRequest struct {
	Request PostAdminRecordingsStartRequestBody `request:"mediaType=application/json"`
}

type PostAdminRecordingsStartResponse struct {
	ContentType string
	StatusCode  int64
}
