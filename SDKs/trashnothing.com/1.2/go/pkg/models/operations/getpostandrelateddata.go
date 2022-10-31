package operations

import (
	"openapi/pkg/models/shared"
)

type GetPostAndRelatedDataPathParams struct {
	PostID string `pathParam:"style=simple,explode=false,name=post_id"`
}

type GetPostAndRelatedDataSecurityOption1 struct {
	Oauth2Implicit shared.SchemeOauth2Implicit `security:"scheme,type=oauth2"`
}

type GetPostAndRelatedDataSecurityOption2 struct {
	Oauth2Code shared.SchemeOauth2Code `security:"scheme,type=oauth2"`
}

type GetPostAndRelatedDataSecurityOption3 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=query"`
}

type GetPostAndRelatedDataSecurity struct {
	Option1 *GetPostAndRelatedDataSecurityOption1 `security:"option"`
	Option2 *GetPostAndRelatedDataSecurityOption2 `security:"option"`
	Option3 *GetPostAndRelatedDataSecurityOption3 `security:"option"`
}

type GetPostAndRelatedDataRequest struct {
	PathParams GetPostAndRelatedDataPathParams
	Security   GetPostAndRelatedDataSecurity
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

type GetPostAndRelatedDataResponse struct {
	ContentType                                   string
	StatusCode                                    int64
	GetPostAndRelatedData200ApplicationJSONObject *GetPostAndRelatedData200ApplicationJSON
}
