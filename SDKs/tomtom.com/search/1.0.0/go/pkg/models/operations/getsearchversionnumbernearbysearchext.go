package operations

import (
"openapi/pkg/models/shared")

type GetSearchVersionNumberNearbySearchExtPathParams struct {
    Ext shared.ExtEnum `pathParam:"style=simple,explode=false,name=ext"`
    VersionNumber int64 `pathParam:"style=simple,explode=false,name=versionNumber"`
    
}

type GetSearchVersionNumberNearbySearchExtQueryParams struct {
    BtmRight *string `queryParam:"style=form,explode=true,name=btmRight"`
    CountrySet *string `queryParam:"style=form,explode=true,name=countrySet"`
    ExtendedPostalCodesFor *string `queryParam:"style=form,explode=true,name=extendedPostalCodesFor"`
    IdxSet *string `queryParam:"style=form,explode=true,name=idxSet"`
    Language *string `queryParam:"style=form,explode=true,name=language"`
    Lat float32 `queryParam:"style=form,explode=true,name=lat"`
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    Lon float32 `queryParam:"style=form,explode=true,name=lon"`
    MaxFuzzyLevel *int64 `queryParam:"style=form,explode=true,name=maxFuzzyLevel"`
    MinFuzzyLevel *int64 `queryParam:"style=form,explode=true,name=minFuzzyLevel"`
    Ofs *int64 `queryParam:"style=form,explode=true,name=ofs"`
    Radius *int64 `queryParam:"style=form,explode=true,name=radius"`
    TopLeft *string `queryParam:"style=form,explode=true,name=topLeft"`
    View *shared.ViewEnum `queryParam:"style=form,explode=true,name=view"`
    
}

type GetSearchVersionNumberNearbySearchExtRequest struct {
    PathParams GetSearchVersionNumberNearbySearchExtPathParams 
    QueryParams GetSearchVersionNumberNearbySearchExtQueryParams 
    
}

type GetSearchVersionNumberNearbySearchExtResponse struct {
    ContentType string 
    StatusCode int64 
    
}

