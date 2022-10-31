package operations



type GetTeamTeamnamePathParams struct {
    Teamname string `pathParam:"style=simple,explode=false,name=teamname"`
    
}

type GetTeamTeamnameRequest struct {
    PathParams GetTeamTeamnamePathParams 
    
}

type GetTeamTeamname200ApplicationJSON struct {
    AtID *string `json:"@id,omitempty"`
    Logo *string `json:"logo,omitempty"`
    LogoEmail *string `json:"logo_email,omitempty"`
    Members []interface{} `json:"members,omitempty"`
    Name *string `json:"name,omitempty"`
    Profile *string `json:"profile,omitempty"`
    Sub string `json:"sub"`
    
}

type GetTeamTeamnameResponse struct {
    ContentType string 
    GetTeamTeamname200ApplicationJSONObject *GetTeamTeamname200ApplicationJSON 
    StatusCode int64 
    
}

