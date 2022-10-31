package operations




type GetServicesDirectionEnum string

const (
    GetServicesDirectionEnumAsc GetServicesDirectionEnum = "asc"
GetServicesDirectionEnumDesc GetServicesDirectionEnum = "desc"
)


type GetServicesQueryParams struct {
    Direction *GetServicesDirectionEnum `queryParam:"style=form,explode=true,name=direction"`
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    Page *string `queryParam:"style=form,explode=true,name=page"`
    Sort *string `queryParam:"style=form,explode=true,name=sort"`
    
}

type GetServicesRequest struct {
    QueryParams GetServicesQueryParams 
    
}

type GetServicesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

