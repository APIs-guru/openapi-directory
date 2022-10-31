package operations

import (
"openapi/pkg/models/shared")

type UpdateScriptTagPathParams struct {
    ScriptTagID int64 `pathParam:"style=simple,explode=false,name=scriptTagId"`
    
}


type UpdateScriptTagRequestBodyScriptTagDisplayScopeEnum string

const (
    UpdateScriptTagRequestBodyScriptTagDisplayScopeEnumAll UpdateScriptTagRequestBodyScriptTagDisplayScopeEnum = "all"
UpdateScriptTagRequestBodyScriptTagDisplayScopeEnumShop UpdateScriptTagRequestBodyScriptTagDisplayScopeEnum = "shop"
UpdateScriptTagRequestBodyScriptTagDisplayScopeEnumThanksPage UpdateScriptTagRequestBodyScriptTagDisplayScopeEnum = "thanks_page"
UpdateScriptTagRequestBodyScriptTagDisplayScopeEnumCart UpdateScriptTagRequestBodyScriptTagDisplayScopeEnum = "cart"
)


type UpdateScriptTagRequestBodyScriptTag struct {
    DisplayScope *UpdateScriptTagRequestBodyScriptTagDisplayScopeEnum `json:"display_scope,omitempty"`
    Src *string `json:"src,omitempty"`
    
}

type UpdateScriptTagRequestBody struct {
    ScriptTag *UpdateScriptTagRequestBodyScriptTag `json:"script_tag,omitempty"`
    
}

type UpdateScriptTagSecurity struct {
    OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
    
}

type UpdateScriptTagRequest struct {
    PathParams UpdateScriptTagPathParams 
    Request *UpdateScriptTagRequestBody `request:"mediaType=application/json"`
    Security UpdateScriptTagSecurity 
    
}


type UpdateScriptTag200ApplicationJSONScriptTagDisplayScopeEnum string

const (
    UpdateScriptTag200ApplicationJSONScriptTagDisplayScopeEnumAll UpdateScriptTag200ApplicationJSONScriptTagDisplayScopeEnum = "all"
UpdateScriptTag200ApplicationJSONScriptTagDisplayScopeEnumShop UpdateScriptTag200ApplicationJSONScriptTagDisplayScopeEnum = "shop"
UpdateScriptTag200ApplicationJSONScriptTagDisplayScopeEnumThanksPage UpdateScriptTag200ApplicationJSONScriptTagDisplayScopeEnum = "thanks_page"
UpdateScriptTag200ApplicationJSONScriptTagDisplayScopeEnumCart UpdateScriptTag200ApplicationJSONScriptTagDisplayScopeEnum = "cart"
)


type UpdateScriptTag200ApplicationJSONScriptTag struct {
    DisplayScope *UpdateScriptTag200ApplicationJSONScriptTagDisplayScopeEnum `json:"display_scope,omitempty"`
    ID *int64 `json:"id,omitempty"`
    MakeDate *int64 `json:"make_date,omitempty"`
    Src *string `json:"src,omitempty"`
    UpdateDate *int64 `json:"update_date,omitempty"`
    
}

type UpdateScriptTag200ApplicationJSON struct {
    ScriptTag *UpdateScriptTag200ApplicationJSONScriptTag `json:"script_tag,omitempty"`
    
}

type UpdateScriptTagResponse struct {
    ContentType string 
    StatusCode int64 
    UpdateScriptTag200ApplicationJSONObject *UpdateScriptTag200ApplicationJSON 
    
}

