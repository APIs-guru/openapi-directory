package operations




type GetQuestionsFeaturedOrderEnum string

const (
    GetQuestionsFeaturedOrderEnumDesc GetQuestionsFeaturedOrderEnum = "desc"
GetQuestionsFeaturedOrderEnumAsc GetQuestionsFeaturedOrderEnum = "asc"
)



type GetQuestionsFeaturedSortEnum string

const (
    GetQuestionsFeaturedSortEnumActivity GetQuestionsFeaturedSortEnum = "activity"
GetQuestionsFeaturedSortEnumCreation GetQuestionsFeaturedSortEnum = "creation"
GetQuestionsFeaturedSortEnumVotes GetQuestionsFeaturedSortEnum = "votes"
)


type GetQuestionsFeaturedQueryParams struct {
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Filter *string `queryParam:"style=form,explode=true,name=filter"`
    Fromdate *int64 `queryParam:"style=form,explode=true,name=fromdate"`
    Max *string `queryParam:"style=form,explode=true,name=max"`
    Min *string `queryParam:"style=form,explode=true,name=min"`
    Order *GetQuestionsFeaturedOrderEnum `queryParam:"style=form,explode=true,name=order"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    Pagesize *int64 `queryParam:"style=form,explode=true,name=pagesize"`
    Site string `queryParam:"style=form,explode=true,name=site"`
    Sort *GetQuestionsFeaturedSortEnum `queryParam:"style=form,explode=true,name=sort"`
    Tagged *string `queryParam:"style=form,explode=true,name=tagged"`
    Todate *int64 `queryParam:"style=form,explode=true,name=todate"`
    
}

type GetQuestionsFeaturedRequest struct {
    QueryParams GetQuestionsFeaturedQueryParams 
    
}

type GetQuestionsFeaturedResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

