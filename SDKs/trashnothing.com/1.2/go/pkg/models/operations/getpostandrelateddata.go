package operations

import (
	"openapi/pkg/models/shared"
)

type GetPostAndRelatedDataPathParams struct {
	PostID string `pathParam:"style=simple,explode=false,name=post_id"`
}

type GetPostAndRelatedDataSecurity struct {
	Oauth2Implicit *shared.SchemeOauth2Implicit `security:"scheme,type=oauth2"`
	Oauth2Code     *shared.SchemeOauth2Code     `security:"scheme,type=oauth2"`
	APIKey         *shared.SchemeAPIKey         `security:"scheme,type=apiKey,subtype=query"`
}

type GetPostAndRelatedData200ApplicationJSON struct {
	Author            *shared.User            `json:"author,omitempty"`
	AuthorOfferCount  *int64                  `json:"author_offer_count,omitempty"`
	AuthorPosts       []shared.Post           `json:"author_posts,omitempty"`
	AuthorWantedCount *int64                  `json:"author_wanted_count,omitempty"`
	Bookmarked        *bool                   `json:"bookmarked,omitempty"`
	Feedback          []shared.Feedback       `json:"feedback,omitempty"`
	GeolocateBounds   *shared.GeolocateBounds `json:"geolocate_bounds,omitempty"`
	Groups            []shared.Group          `json:"groups,omitempty"`
	Post              *shared.Post            `json:"post,omitempty"`
	Replied           *bool                   `json:"replied,omitempty"`
	UserCanReply      *bool                   `json:"user_can_reply,omitempty"`
	Viewed            *bool                   `json:"viewed,omitempty"`
}

type GetPostAndRelatedDataRequest struct {
	PathParams GetPostAndRelatedDataPathParams
	Security   GetPostAndRelatedDataSecurity
}

type GetPostAndRelatedDataResponse struct {
	ContentType                                   string
	StatusCode                                    int64
	GetPostAndRelatedData200ApplicationJSONObject *GetPostAndRelatedData200ApplicationJSON
}
