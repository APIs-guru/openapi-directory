package shared

type ListTagsResponseLinks struct {
	Next string `json:"next"`
	Prev string `json:"prev"`
}

type ListTagsResponse struct {
	Data  []TagResource         `json:"data"`
	Links ListTagsResponseLinks `json:"links"`
}
