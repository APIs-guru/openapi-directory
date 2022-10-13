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
	Author            *shared.User            `json:"author"`
	AuthorOfferCount  *int64                  `json:"author_offer_count"`
	AuthorPosts       []shared.Post           `json:"author_posts"`
	AuthorWantedCount *int64                  `json:"author_wanted_count"`
	Bookmarked        *bool                   `json:"bookmarked"`
	Feedback          []shared.Feedback       `json:"feedback"`
	GeolocateBounds   *shared.GeolocateBounds `json:"geolocate_bounds"`
	Groups            []shared.Group          `json:"groups"`
	Post              *shared.Post            `json:"post"`
	Replied           *bool                   `json:"replied"`
	UserCanReply      *bool                   `json:"user_can_reply"`
	Viewed            *bool                   `json:"viewed"`
}

type GetPostAndRelatedDataResponse struct {
	ContentType                                   string
	StatusCode                                    int64
	GetPostAndRelatedData200ApplicationJSONObject *GetPostAndRelatedData200ApplicationJSON
}
