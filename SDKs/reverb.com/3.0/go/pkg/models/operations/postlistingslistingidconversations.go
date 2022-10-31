package operations

import (
"openapi/pkg/models/shared")

type PostListingsListingIDConversationsPathParams struct {
    ListingID string `pathParam:"style=simple,explode=false,name=listing_id"`
    
}

type PostListingsListingIDConversationsRequestBody struct {
    Body string `json:"body"`
    
}

type PostListingsListingIDConversationsSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type PostListingsListingIDConversationsRequest struct {
    PathParams PostListingsListingIDConversationsPathParams 
    Request *PostListingsListingIDConversationsRequestBody `request:"mediaType=application/json"`
    Security PostListingsListingIDConversationsSecurity 
    
}

type PostListingsListingIDConversationsResponse struct {
    ContentType string 
    StatusCode int64 
    
}

