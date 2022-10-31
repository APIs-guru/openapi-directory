package operations

import (
"openapi/pkg/models/shared")

type UserAPIGetEventsPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}


type UserAPIGetEventsRelationshipTypeEnum string

const (
    UserAPIGetEventsRelationshipTypeEnumInterested UserAPIGetEventsRelationshipTypeEnum = "Interested"
UserAPIGetEventsRelationshipTypeEnumAttending UserAPIGetEventsRelationshipTypeEnum = "Attending"
)


type UserAPIGetEventsQueryParams struct {
    RelationshipType UserAPIGetEventsRelationshipTypeEnum `queryParam:"style=form,explode=true,name=relationshipType"`
    
}

type UserAPIGetEventsRequest struct {
    PathParams UserAPIGetEventsPathParams 
    QueryParams UserAPIGetEventsQueryParams 
    
}

type UserAPIGetEventsResponse struct {
    Body []byte 
    ContentType string 
    ReleaseEventForAPIContracts []shared.ReleaseEventForAPIContract 
    StatusCode int64 
    
}

