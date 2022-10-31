package operations




type GetHeatingMarginCoverageDirectionEnum string

const (
    GetHeatingMarginCoverageDirectionEnumAsc GetHeatingMarginCoverageDirectionEnum = "asc"
GetHeatingMarginCoverageDirectionEnumDesc GetHeatingMarginCoverageDirectionEnum = "desc"
)


type GetHeatingMarginCoverageQueryParams struct {
    ApplicationID *string `queryParam:"style=form,explode=true,name=applicationId"`
    Covered *bool `queryParam:"style=form,explode=true,name=covered"`
    Direction *GetHeatingMarginCoverageDirectionEnum `queryParam:"style=form,explode=true,name=direction"`
    GroupID *string `queryParam:"style=form,explode=true,name=groupId"`
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    Page *string `queryParam:"style=form,explode=true,name=page"`
    ServiceID *string `queryParam:"style=form,explode=true,name=serviceId"`
    Sort *string `queryParam:"style=form,explode=true,name=sort"`
    
}

type GetHeatingMarginCoverageRequest struct {
    QueryParams GetHeatingMarginCoverageQueryParams 
    
}

type GetHeatingMarginCoverageResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

