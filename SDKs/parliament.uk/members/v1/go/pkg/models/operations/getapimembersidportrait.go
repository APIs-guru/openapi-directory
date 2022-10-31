package operations



type GetAPIMembersIDPortraitPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetAPIMembersIDPortraitQueryParams struct {
    CropType *int32 `queryParam:"style=form,explode=true,name=cropType"`
    WebVersion *bool `queryParam:"style=form,explode=true,name=webVersion"`
    
}

type GetAPIMembersIDPortraitRequest struct {
    PathParams GetAPIMembersIDPortraitPathParams 
    QueryParams GetAPIMembersIDPortraitQueryParams 
    
}

type GetAPIMembersIDPortraitResponse struct {
    ContentType string 
    StatusCode int64 
    
}

