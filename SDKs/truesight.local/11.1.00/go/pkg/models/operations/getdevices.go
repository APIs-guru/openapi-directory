package operations




type GetDevicesDirectionEnum string

const (
    GetDevicesDirectionEnumAsc GetDevicesDirectionEnum = "asc"
GetDevicesDirectionEnumDesc GetDevicesDirectionEnum = "desc"
)


type GetDevicesQueryParams struct {
    ApplicationID *string `queryParam:"style=form,explode=true,name=applicationId"`
    Direction *GetDevicesDirectionEnum `queryParam:"style=form,explode=true,name=direction"`
    GroupID *string `queryParam:"style=form,explode=true,name=groupId"`
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    Page *string `queryParam:"style=form,explode=true,name=page"`
    ServiceID *string `queryParam:"style=form,explode=true,name=serviceId"`
    Sort *string `queryParam:"style=form,explode=true,name=sort"`
    
}

type GetDevicesRequest struct {
    QueryParams GetDevicesQueryParams 
    
}

type GetDevicesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

