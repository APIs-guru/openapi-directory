package operations



type GetUsersIdsCommentsPathParams struct {
    Ids string `pathParam:"style=simple,explode=false,name=ids"`
    
}


type GetUsersIdsCommentsOrderEnum string

const (
    GetUsersIdsCommentsOrderEnumDesc GetUsersIdsCommentsOrderEnum = "desc"
GetUsersIdsCommentsOrderEnumAsc GetUsersIdsCommentsOrderEnum = "asc"
)



type GetUsersIdsCommentsSortEnum string

const (
    GetUsersIdsCommentsSortEnumCreation GetUsersIdsCommentsSortEnum = "creation"
GetUsersIdsCommentsSortEnumVotes GetUsersIdsCommentsSortEnum = "votes"
)


type GetUsersIdsCommentsQueryParams struct {
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Filter *string `queryParam:"style=form,explode=true,name=filter"`
    Fromdate *int64 `queryParam:"style=form,explode=true,name=fromdate"`
    Max *string `queryParam:"style=form,explode=true,name=max"`
    Min *string `queryParam:"style=form,explode=true,name=min"`
    Order *GetUsersIdsCommentsOrderEnum `queryParam:"style=form,explode=true,name=order"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    Pagesize *int64 `queryParam:"style=form,explode=true,name=pagesize"`
    Site string `queryParam:"style=form,explode=true,name=site"`
    Sort *GetUsersIdsCommentsSortEnum `queryParam:"style=form,explode=true,name=sort"`
    Todate *int64 `queryParam:"style=form,explode=true,name=todate"`
    
}

type GetUsersIdsCommentsRequest struct {
    PathParams GetUsersIdsCommentsPathParams 
    QueryParams GetUsersIdsCommentsQueryParams 
    
}

type GetUsersIdsCommentsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

