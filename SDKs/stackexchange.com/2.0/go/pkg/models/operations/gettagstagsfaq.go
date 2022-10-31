package operations



type GetTagsTagsFaqPathParams struct {
    Tags string `pathParam:"style=simple,explode=false,name=tags"`
    
}

type GetTagsTagsFaqQueryParams struct {
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Filter *string `queryParam:"style=form,explode=true,name=filter"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    Pagesize *int64 `queryParam:"style=form,explode=true,name=pagesize"`
    Site string `queryParam:"style=form,explode=true,name=site"`
    
}

type GetTagsTagsFaqRequest struct {
    PathParams GetTagsTagsFaqPathParams 
    QueryParams GetTagsTagsFaqQueryParams 
    
}

type GetTagsTagsFaqResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

