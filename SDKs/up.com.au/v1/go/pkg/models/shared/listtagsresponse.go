package shared

type ListTagsResponseLinks struct {
	Next string `json:"next"`
	Prev string `json:"prev"`
}

// ListTagsResponse
// Successful response to get all tags. This returns a paginated list of
// tags, which can be scrolled by following the `prev` and `next` links if
// present.
type ListTagsResponse struct {
	Data  []TagResource         `json:"data"`
	Links ListTagsResponseLinks `json:"links"`
}
