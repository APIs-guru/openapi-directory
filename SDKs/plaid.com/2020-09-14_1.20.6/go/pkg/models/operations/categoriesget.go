package operations

type CategoriesGetRequest struct {
	Request map[string]interface{} `request:"mediaType=application/json"`
}

type CategoriesGetResponse struct {
	CategoriesGetResponse map[string]interface{}
	ContentType           string
	Error                 map[string]interface{}
	StatusCode            int64
}
