package operations



type GetQuestionsIdsCommentsPathParams struct {
    Ids string `pathParam:"style=simple,explode=false,name=ids"`
    
}


type GetQuestionsIdsCommentsOrderEnum string

const (
    GetQuestionsIdsCommentsOrderEnumDesc GetQuestionsIdsCommentsOrderEnum = "desc"
GetQuestionsIdsCommentsOrderEnumAsc GetQuestionsIdsCommentsOrderEnum = "asc"
)



type GetQuestionsIdsCommentsSortEnum string

const (
    GetQuestionsIdsCommentsSortEnumCreation GetQuestionsIdsCommentsSortEnum = "creation"
GetQuestionsIdsCommentsSortEnumVotes GetQuestionsIdsCommentsSortEnum = "votes"
)


type GetQuestionsIdsCommentsQueryParams struct {
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Filter *string `queryParam:"style=form,explode=true,name=filter"`
    Fromdate *int64 `queryParam:"style=form,explode=true,name=fromdate"`
    Max *string `queryParam:"style=form,explode=true,name=max"`
    Min *string `queryParam:"style=form,explode=true,name=min"`
    Order *GetQuestionsIdsCommentsOrderEnum `queryParam:"style=form,explode=true,name=order"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    Pagesize *int64 `queryParam:"style=form,explode=true,name=pagesize"`
    Site string `queryParam:"style=form,explode=true,name=site"`
    Sort *GetQuestionsIdsCommentsSortEnum `queryParam:"style=form,explode=true,name=sort"`
    Todate *int64 `queryParam:"style=form,explode=true,name=todate"`
    
}

type GetQuestionsIdsCommentsRequest struct {
    PathParams GetQuestionsIdsCommentsPathParams 
    QueryParams GetQuestionsIdsCommentsQueryParams 
    
}

type GetQuestionsIdsCommentsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

