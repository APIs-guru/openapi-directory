package operations

import (
"openapi/pkg/models/shared")

type GetUserAndRelatedDataPathParams struct {
    UserID string `pathParam:"style=simple,explode=false,name=user_id"`
    
}

type GetUserAndRelatedDataRequest struct {
    PathParams GetUserAndRelatedDataPathParams 
    
}

type GetUserAndRelatedData200ApplicationJSON struct {
    Feedback []shared.Feedback `json:"feedback,omitempty"`
    OfferCount *int64 `json:"offer_count,omitempty"`
    Posts []shared.Post `json:"posts,omitempty"`
    User *shared.User `json:"user,omitempty"`
    WantedCount *int64 `json:"wanted_count,omitempty"`
    
}

type GetUserAndRelatedDataResponse struct {
    ContentType string 
    StatusCode int64 
    GetUserAndRelatedData200ApplicationJSONObject *GetUserAndRelatedData200ApplicationJSON 
    
}

