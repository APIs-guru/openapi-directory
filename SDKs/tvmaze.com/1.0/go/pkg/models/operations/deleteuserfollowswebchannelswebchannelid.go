package operations



type DeleteUserFollowsWebchannelsWebchannelIDPathParams struct {
    WebchannelID int64 `pathParam:"style=simple,explode=false,name=webchannel_id"`
    
}

type DeleteUserFollowsWebchannelsWebchannelIDRequest struct {
    PathParams DeleteUserFollowsWebchannelsWebchannelIDPathParams 
    
}

type DeleteUserFollowsWebchannelsWebchannelIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}

