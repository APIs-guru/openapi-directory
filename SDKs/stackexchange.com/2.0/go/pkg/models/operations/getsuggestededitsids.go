package operations



type GetSuggestedEditsIdsPathParams struct {
    Ids string `pathParam:"style=simple,explode=false,name=ids"`
    
}


type GetSuggestedEditsIdsOrderEnum string

const (
    GetSuggestedEditsIdsOrderEnumDesc GetSuggestedEditsIdsOrderEnum = "desc"
GetSuggestedEditsIdsOrderEnumAsc GetSuggestedEditsIdsOrderEnum = "asc"
)



type GetSuggestedEditsIdsSortEnum string

const (
    GetSuggestedEditsIdsSortEnumCreation GetSuggestedEditsIdsSortEnum = "creation"
GetSuggestedEditsIdsSortEnumApproval GetSuggestedEditsIdsSortEnum = "approval"
GetSuggestedEditsIdsSortEnumRejection GetSuggestedEditsIdsSortEnum = "rejection"
)


type GetSuggestedEditsIdsQueryParams struct {
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Filter *string `queryParam:"style=form,explode=true,name=filter"`
    Fromdate *int64 `queryParam:"style=form,explode=true,name=fromdate"`
    Max *string `queryParam:"style=form,explode=true,name=max"`
    Min *string `queryParam:"style=form,explode=true,name=min"`
    Order *GetSuggestedEditsIdsOrderEnum `queryParam:"style=form,explode=true,name=order"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    Pagesize *int64 `queryParam:"style=form,explode=true,name=pagesize"`
    Site string `queryParam:"style=form,explode=true,name=site"`
    Sort *GetSuggestedEditsIdsSortEnum `queryParam:"style=form,explode=true,name=sort"`
    Todate *int64 `queryParam:"style=form,explode=true,name=todate"`
    
}

type GetSuggestedEditsIdsRequest struct {
    PathParams GetSuggestedEditsIdsPathParams 
    QueryParams GetSuggestedEditsIdsQueryParams 
    
}

type GetSuggestedEditsIdsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

