package operations



type GetTagsTagsSynonymsPathParams struct {
    Tags string `pathParam:"style=simple,explode=false,name=tags"`
    
}


type GetTagsTagsSynonymsOrderEnum string

const (
    GetTagsTagsSynonymsOrderEnumDesc GetTagsTagsSynonymsOrderEnum = "desc"
GetTagsTagsSynonymsOrderEnumAsc GetTagsTagsSynonymsOrderEnum = "asc"
)



type GetTagsTagsSynonymsSortEnum string

const (
    GetTagsTagsSynonymsSortEnumCreation GetTagsTagsSynonymsSortEnum = "creation"
GetTagsTagsSynonymsSortEnumApplied GetTagsTagsSynonymsSortEnum = "applied"
GetTagsTagsSynonymsSortEnumActivity GetTagsTagsSynonymsSortEnum = "activity"
)


type GetTagsTagsSynonymsQueryParams struct {
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Filter *string `queryParam:"style=form,explode=true,name=filter"`
    Fromdate *int64 `queryParam:"style=form,explode=true,name=fromdate"`
    Max *string `queryParam:"style=form,explode=true,name=max"`
    Min *string `queryParam:"style=form,explode=true,name=min"`
    Order *GetTagsTagsSynonymsOrderEnum `queryParam:"style=form,explode=true,name=order"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    Pagesize *int64 `queryParam:"style=form,explode=true,name=pagesize"`
    Site string `queryParam:"style=form,explode=true,name=site"`
    Sort *GetTagsTagsSynonymsSortEnum `queryParam:"style=form,explode=true,name=sort"`
    Todate *int64 `queryParam:"style=form,explode=true,name=todate"`
    
}

type GetTagsTagsSynonymsRequest struct {
    PathParams GetTagsTagsSynonymsPathParams 
    QueryParams GetTagsTagsSynonymsQueryParams 
    
}

type GetTagsTagsSynonymsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

