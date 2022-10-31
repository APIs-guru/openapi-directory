package operations



type DeleteUserFollowsPeoplePersonIDPathParams struct {
    PersonID int64 `pathParam:"style=simple,explode=false,name=person_id"`
    
}

type DeleteUserFollowsPeoplePersonIDRequest struct {
    PathParams DeleteUserFollowsPeoplePersonIDPathParams 
    
}

type DeleteUserFollowsPeoplePersonIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}

