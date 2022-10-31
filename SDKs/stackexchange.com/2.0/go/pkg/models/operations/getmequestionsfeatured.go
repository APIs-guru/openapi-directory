package operations




type GetMeQuestionsFeaturedOrderEnum string

const (
    GetMeQuestionsFeaturedOrderEnumDesc GetMeQuestionsFeaturedOrderEnum = "desc"
GetMeQuestionsFeaturedOrderEnumAsc GetMeQuestionsFeaturedOrderEnum = "asc"
)



type GetMeQuestionsFeaturedSortEnum string

const (
    GetMeQuestionsFeaturedSortEnumActivity GetMeQuestionsFeaturedSortEnum = "activity"
GetMeQuestionsFeaturedSortEnumCreation GetMeQuestionsFeaturedSortEnum = "creation"
GetMeQuestionsFeaturedSortEnumVotes GetMeQuestionsFeaturedSortEnum = "votes"
)


type GetMeQuestionsFeaturedQueryParams struct {
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Filter *string `queryParam:"style=form,explode=true,name=filter"`
    Fromdate *int64 `queryParam:"style=form,explode=true,name=fromdate"`
    Max *string `queryParam:"style=form,explode=true,name=max"`
    Min *string `queryParam:"style=form,explode=true,name=min"`
    Order *GetMeQuestionsFeaturedOrderEnum `queryParam:"style=form,explode=true,name=order"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    Pagesize *int64 `queryParam:"style=form,explode=true,name=pagesize"`
    Site string `queryParam:"style=form,explode=true,name=site"`
    Sort *GetMeQuestionsFeaturedSortEnum `queryParam:"style=form,explode=true,name=sort"`
    Todate *int64 `queryParam:"style=form,explode=true,name=todate"`
    
}

type GetMeQuestionsFeaturedRequest struct {
    QueryParams GetMeQuestionsFeaturedQueryParams 
    
}

type GetMeQuestionsFeaturedResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

