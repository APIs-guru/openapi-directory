package operations




type GetCommentsOrderEnum string

const (
    GetCommentsOrderEnumDesc GetCommentsOrderEnum = "desc"
GetCommentsOrderEnumAsc GetCommentsOrderEnum = "asc"
)



type GetCommentsSortEnum string

const (
    GetCommentsSortEnumCreation GetCommentsSortEnum = "creation"
GetCommentsSortEnumVotes GetCommentsSortEnum = "votes"
)


type GetCommentsQueryParams struct {
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Filter *string `queryParam:"style=form,explode=true,name=filter"`
    Fromdate *int64 `queryParam:"style=form,explode=true,name=fromdate"`
    Max *string `queryParam:"style=form,explode=true,name=max"`
    Min *string `queryParam:"style=form,explode=true,name=min"`
    Order *GetCommentsOrderEnum `queryParam:"style=form,explode=true,name=order"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    Pagesize *int64 `queryParam:"style=form,explode=true,name=pagesize"`
    Site string `queryParam:"style=form,explode=true,name=site"`
    Sort *GetCommentsSortEnum `queryParam:"style=form,explode=true,name=sort"`
    Todate *int64 `queryParam:"style=form,explode=true,name=todate"`
    
}

type GetCommentsRequest struct {
    QueryParams GetCommentsQueryParams 
    
}

type GetCommentsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

