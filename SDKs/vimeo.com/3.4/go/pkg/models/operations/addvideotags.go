package operations

import (
	"openapi/pkg/models/shared"
)

type AddVideoTagsPathParams struct {
	VideoID float64 `pathParam:"style=simple,explode=false,name=video_id"`
}

type AddVideoTagsRequestBody struct {
	Name    string   `json:"name"`
	Page    *float64 `json:"page,omitempty"`
	PerPage *float64 `json:"per_page,omitempty"`
}

type AddVideoTagsSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type AddVideoTagsRequest struct {
	PathParams AddVideoTagsPathParams
	Request    AddVideoTagsRequestBody `request:"mediaType=application/vnd.vimeo.tag+json"`
	Security   AddVideoTagsSecurity
}

type AddVideoTagsResponse struct {
	ContentType string
	StatusCode  int64
	LegacyError *shared.LegacyError
	Tags        []shared.Tag
}
