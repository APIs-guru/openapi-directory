package operations



type GetPostsIdsPathParams struct {
    Ids string `pathParam:"style=simple,explode=false,name=ids"`
    
}


type GetPostsIdsOrderEnum string

const (
    GetPostsIdsOrderEnumDesc GetPostsIdsOrderEnum = "desc"
GetPostsIdsOrderEnumAsc GetPostsIdsOrderEnum = "asc"
)



type GetPostsIdsSortEnum string

const (
    GetPostsIdsSortEnumActivity GetPostsIdsSortEnum = "activity"
GetPostsIdsSortEnumCreation GetPostsIdsSortEnum = "creation"
GetPostsIdsSortEnumVotes GetPostsIdsSortEnum = "votes"
)


type GetPostsIdsQueryParams struct {
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Filter *string `queryParam:"style=form,explode=true,name=filter"`
    Fromdate *int64 `queryParam:"style=form,explode=true,name=fromdate"`
    Max *string `queryParam:"style=form,explode=true,name=max"`
    Min *string `queryParam:"style=form,explode=true,name=min"`
    Order *GetPostsIdsOrderEnum `queryParam:"style=form,explode=true,name=order"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    Pagesize *int64 `queryParam:"style=form,explode=true,name=pagesize"`
    Site string `queryParam:"style=form,explode=true,name=site"`
    Sort *GetPostsIdsSortEnum `queryParam:"style=form,explode=true,name=sort"`
    Todate *int64 `queryParam:"style=form,explode=true,name=todate"`
    
}

type GetPostsIdsRequest struct {
    PathParams GetPostsIdsPathParams 
    QueryParams GetPostsIdsQueryParams 
    
}

type GetPostsIdsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

