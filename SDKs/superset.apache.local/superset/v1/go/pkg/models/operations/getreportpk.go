package operations

import (
"openapi/pkg/models/shared")

type GetReportPkPathParams struct {
    Pk int64 `pathParam:"style=simple,explode=false,name=pk"`
    
}

type GetReportPkQueryParams struct {
    Q *shared.GetItemSchema `queryParam:"serialization=json,name=q"`
    
}

type GetReportPkSecurity struct {
    Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
    
}

type GetReportPkRequest struct {
    PathParams GetReportPkPathParams 
    QueryParams GetReportPkQueryParams 
    Security GetReportPkSecurity 
    
}

type GetReportPk200ApplicationJSONDescriptionColumns struct {
    ColumnName *string `json:"column_name,omitempty"`
    
}

type GetReportPk200ApplicationJSONLabelColumns struct {
    ColumnName *string `json:"column_name,omitempty"`
    
}

type GetReportPk200ApplicationJSON struct {
    DescriptionColumns *GetReportPk200ApplicationJSONDescriptionColumns `json:"description_columns,omitempty"`
    ID *string `json:"id,omitempty"`
    LabelColumns *GetReportPk200ApplicationJSONLabelColumns `json:"label_columns,omitempty"`
    Result *shared.ReportScheduleRestAPIGet `json:"result,omitempty"`
    ShowColumns []string `json:"show_columns,omitempty"`
    ShowTitle *string `json:"show_title,omitempty"`
    
}

type GetReportPk400ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type GetReportPk401ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type GetReportPk404ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type GetReportPk422ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type GetReportPk500ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type GetReportPkResponse struct {
    ContentType string 
    GetReportPk200ApplicationJSONObject *GetReportPk200ApplicationJSON 
    GetReportPk400ApplicationJSONObject *GetReportPk400ApplicationJSON 
    GetReportPk401ApplicationJSONObject *GetReportPk401ApplicationJSON 
    GetReportPk404ApplicationJSONObject *GetReportPk404ApplicationJSON 
    GetReportPk422ApplicationJSONObject *GetReportPk422ApplicationJSON 
    GetReportPk500ApplicationJSONObject *GetReportPk500ApplicationJSON 
    StatusCode int64 
    
}

