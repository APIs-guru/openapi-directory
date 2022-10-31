package operations




type GetAnswersOrderEnum string

const (
    GetAnswersOrderEnumDesc GetAnswersOrderEnum = "desc"
GetAnswersOrderEnumAsc GetAnswersOrderEnum = "asc"
)



type GetAnswersSortEnum string

const (
    GetAnswersSortEnumActivity GetAnswersSortEnum = "activity"
GetAnswersSortEnumCreation GetAnswersSortEnum = "creation"
GetAnswersSortEnumVotes GetAnswersSortEnum = "votes"
)


type GetAnswersQueryParams struct {
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Filter *string `queryParam:"style=form,explode=true,name=filter"`
    Fromdate *int64 `queryParam:"style=form,explode=true,name=fromdate"`
    Max *string `queryParam:"style=form,explode=true,name=max"`
    Min *string `queryParam:"style=form,explode=true,name=min"`
    Order *GetAnswersOrderEnum `queryParam:"style=form,explode=true,name=order"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    Pagesize *int64 `queryParam:"style=form,explode=true,name=pagesize"`
    Site string `queryParam:"style=form,explode=true,name=site"`
    Sort *GetAnswersSortEnum `queryParam:"style=form,explode=true,name=sort"`
    Todate *int64 `queryParam:"style=form,explode=true,name=todate"`
    
}

type GetAnswersRequest struct {
    QueryParams GetAnswersQueryParams 
    
}

type GetAnswersResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

