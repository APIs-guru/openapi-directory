package operations



type GetCommentsIdsPathParams struct {
    Ids string `pathParam:"style=simple,explode=false,name=ids"`
    
}


type GetCommentsIdsOrderEnum string

const (
    GetCommentsIdsOrderEnumDesc GetCommentsIdsOrderEnum = "desc"
GetCommentsIdsOrderEnumAsc GetCommentsIdsOrderEnum = "asc"
)



type GetCommentsIdsSortEnum string

const (
    GetCommentsIdsSortEnumCreation GetCommentsIdsSortEnum = "creation"
GetCommentsIdsSortEnumVotes GetCommentsIdsSortEnum = "votes"
)


type GetCommentsIdsQueryParams struct {
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Filter *string `queryParam:"style=form,explode=true,name=filter"`
    Fromdate *int64 `queryParam:"style=form,explode=true,name=fromdate"`
    Max *string `queryParam:"style=form,explode=true,name=max"`
    Min *string `queryParam:"style=form,explode=true,name=min"`
    Order *GetCommentsIdsOrderEnum `queryParam:"style=form,explode=true,name=order"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    Pagesize *int64 `queryParam:"style=form,explode=true,name=pagesize"`
    Site string `queryParam:"style=form,explode=true,name=site"`
    Sort *GetCommentsIdsSortEnum `queryParam:"style=form,explode=true,name=sort"`
    Todate *int64 `queryParam:"style=form,explode=true,name=todate"`
    
}

type GetCommentsIdsRequest struct {
    PathParams GetCommentsIdsPathParams 
    QueryParams GetCommentsIdsQueryParams 
    
}

type GetCommentsIdsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

