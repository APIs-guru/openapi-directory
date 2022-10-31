package operations

import (
"openapi/pkg/models/shared")

type GetDashboardIDOrSlugDatasetsPathParams struct {
    IDOrSlug string `pathParam:"style=simple,explode=false,name=id_or_slug"`
    
}

type GetDashboardIDOrSlugDatasetsSecurity struct {
    Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
    
}

type GetDashboardIDOrSlugDatasetsRequest struct {
    PathParams GetDashboardIDOrSlugDatasetsPathParams 
    Security GetDashboardIDOrSlugDatasetsSecurity 
    
}

type GetDashboardIDOrSlugDatasets200ApplicationJSON struct {
    Result []shared.DashboardDatasetSchema `json:"result,omitempty"`
    
}

type GetDashboardIDOrSlugDatasets400ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type GetDashboardIDOrSlugDatasets401ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type GetDashboardIDOrSlugDatasets404ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type GetDashboardIDOrSlugDatasetsResponse struct {
    ContentType string 
    GetDashboardIDOrSlugDatasets200ApplicationJSONObject *GetDashboardIDOrSlugDatasets200ApplicationJSON 
    GetDashboardIDOrSlugDatasets400ApplicationJSONObject *GetDashboardIDOrSlugDatasets400ApplicationJSON 
    GetDashboardIDOrSlugDatasets401ApplicationJSONObject *GetDashboardIDOrSlugDatasets401ApplicationJSON 
    GetDashboardIDOrSlugDatasets404ApplicationJSONObject *GetDashboardIDOrSlugDatasets404ApplicationJSON 
    StatusCode int64 
    
}

