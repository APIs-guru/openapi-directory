package operations

type PostListingsSlugFlagPathParams struct {
	Slug string `pathParam:"style=simple,explode=false,name=slug"`
}

type PostListingsSlugFlagRequestBody struct {
	Description *string `json:"description"`
	Reason      string  `json:"reason"`
}

type PostListingsSlugFlagRequest struct {
	PathParams PostListingsSlugFlagPathParams
	Request    *PostListingsSlugFlagRequestBody `request:"mediaType=application/json"`
}

type PostListingsSlugFlagResponse struct {
	ContentType string
	StatusCode  int64
}
