package operations

import (
"openapi/pkg/models/shared")


type CreateScriptTagRequestBodyScriptTagDisplayScopeEnum string

const (
    CreateScriptTagRequestBodyScriptTagDisplayScopeEnumAll CreateScriptTagRequestBodyScriptTagDisplayScopeEnum = "all"
CreateScriptTagRequestBodyScriptTagDisplayScopeEnumShop CreateScriptTagRequestBodyScriptTagDisplayScopeEnum = "shop"
CreateScriptTagRequestBodyScriptTagDisplayScopeEnumThanksPage CreateScriptTagRequestBodyScriptTagDisplayScopeEnum = "thanks_page"
CreateScriptTagRequestBodyScriptTagDisplayScopeEnumCart CreateScriptTagRequestBodyScriptTagDisplayScopeEnum = "cart"
)


type CreateScriptTagRequestBodyScriptTag struct {
    DisplayScope *CreateScriptTagRequestBodyScriptTagDisplayScopeEnum `json:"display_scope,omitempty"`
    Src *string `json:"src,omitempty"`
    
}

type CreateScriptTagRequestBody struct {
    ScriptTag *CreateScriptTagRequestBodyScriptTag `json:"script_tag,omitempty"`
    
}

type CreateScriptTagSecurity struct {
    OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
    
}

type CreateScriptTagRequest struct {
    Request *CreateScriptTagRequestBody `request:"mediaType=application/json"`
    Security CreateScriptTagSecurity 
    
}


type CreateScriptTag200ApplicationJSONScriptTagDisplayScopeEnum string

const (
    CreateScriptTag200ApplicationJSONScriptTagDisplayScopeEnumAll CreateScriptTag200ApplicationJSONScriptTagDisplayScopeEnum = "all"
CreateScriptTag200ApplicationJSONScriptTagDisplayScopeEnumShop CreateScriptTag200ApplicationJSONScriptTagDisplayScopeEnum = "shop"
CreateScriptTag200ApplicationJSONScriptTagDisplayScopeEnumThanksPage CreateScriptTag200ApplicationJSONScriptTagDisplayScopeEnum = "thanks_page"
CreateScriptTag200ApplicationJSONScriptTagDisplayScopeEnumCart CreateScriptTag200ApplicationJSONScriptTagDisplayScopeEnum = "cart"
)


type CreateScriptTag200ApplicationJSONScriptTag struct {
    DisplayScope *CreateScriptTag200ApplicationJSONScriptTagDisplayScopeEnum `json:"display_scope,omitempty"`
    ID *int64 `json:"id,omitempty"`
    MakeDate *int64 `json:"make_date,omitempty"`
    Src *string `json:"src,omitempty"`
    UpdateDate *int64 `json:"update_date,omitempty"`
    
}

type CreateScriptTag200ApplicationJSON struct {
    ScriptTag *CreateScriptTag200ApplicationJSONScriptTag `json:"script_tag,omitempty"`
    
}

type CreateScriptTagResponse struct {
    ContentType string 
    StatusCode int64 
    CreateScriptTag200ApplicationJSONObject *CreateScriptTag200ApplicationJSON 
    
}

