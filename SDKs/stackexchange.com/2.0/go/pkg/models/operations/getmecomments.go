package operations




type GetMeCommentsOrderEnum string

const (
    GetMeCommentsOrderEnumDesc GetMeCommentsOrderEnum = "desc"
GetMeCommentsOrderEnumAsc GetMeCommentsOrderEnum = "asc"
)



type GetMeCommentsSortEnum string

const (
    GetMeCommentsSortEnumCreation GetMeCommentsSortEnum = "creation"
GetMeCommentsSortEnumVotes GetMeCommentsSortEnum = "votes"
)


type GetMeCommentsQueryParams struct {
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Filter *string `queryParam:"style=form,explode=true,name=filter"`
    Fromdate *int64 `queryParam:"style=form,explode=true,name=fromdate"`
    Max *string `queryParam:"style=form,explode=true,name=max"`
    Min *string `queryParam:"style=form,explode=true,name=min"`
    Order *GetMeCommentsOrderEnum `queryParam:"style=form,explode=true,name=order"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    Pagesize *int64 `queryParam:"style=form,explode=true,name=pagesize"`
    Site string `queryParam:"style=form,explode=true,name=site"`
    Sort *GetMeCommentsSortEnum `queryParam:"style=form,explode=true,name=sort"`
    Todate *int64 `queryParam:"style=form,explode=true,name=todate"`
    
}

type GetMeCommentsRequest struct {
    QueryParams GetMeCommentsQueryParams 
    
}

type GetMeCommentsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

