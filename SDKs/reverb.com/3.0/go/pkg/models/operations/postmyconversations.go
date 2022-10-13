package operations

import (
	"openapi/pkg/models/shared"
)

type PostMyConversationsRequestBody struct {
	Body             string   `json:"body"`
	CloudinaryPhotos []string `json:"cloudinary_photos"`
	ListingID        *int64   `json:"listing_id"`
	RecipientID      *int64   `json:"recipient_id"`
	RecipientUUID    *string  `json:"recipient_uuid"`
	ShopID           *string  `json:"shop_id"`
}

type PostMyConversationsSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type PostMyConversationsRequest struct {
	Request  *PostMyConversationsRequestBody `request:"mediaType=application/json"`
	Security PostMyConversationsSecurity
}

type PostMyConversationsResponse struct {
	ContentType string
	StatusCode  int64
}
