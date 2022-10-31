package operations



type GetAnswersIdsCommentsPathParams struct {
    Ids string `pathParam:"style=simple,explode=false,name=ids"`
    
}


type GetAnswersIdsCommentsOrderEnum string

const (
    GetAnswersIdsCommentsOrderEnumDesc GetAnswersIdsCommentsOrderEnum = "desc"
GetAnswersIdsCommentsOrderEnumAsc GetAnswersIdsCommentsOrderEnum = "asc"
)



type GetAnswersIdsCommentsSortEnum string

const (
    GetAnswersIdsCommentsSortEnumCreation GetAnswersIdsCommentsSortEnum = "creation"
GetAnswersIdsCommentsSortEnumVotes GetAnswersIdsCommentsSortEnum = "votes"
)


type GetAnswersIdsCommentsQueryParams struct {
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Filter *string `queryParam:"style=form,explode=true,name=filter"`
    Fromdate *int64 `queryParam:"style=form,explode=true,name=fromdate"`
    Max *string `queryParam:"style=form,explode=true,name=max"`
    Min *string `queryParam:"style=form,explode=true,name=min"`
    Order *GetAnswersIdsCommentsOrderEnum `queryParam:"style=form,explode=true,name=order"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    Pagesize *int64 `queryParam:"style=form,explode=true,name=pagesize"`
    Site string `queryParam:"style=form,explode=true,name=site"`
    Sort *GetAnswersIdsCommentsSortEnum `queryParam:"style=form,explode=true,name=sort"`
    Todate *int64 `queryParam:"style=form,explode=true,name=todate"`
    
}

type GetAnswersIdsCommentsRequest struct {
    PathParams GetAnswersIdsCommentsPathParams 
    QueryParams GetAnswersIdsCommentsQueryParams 
    
}

type GetAnswersIdsCommentsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

