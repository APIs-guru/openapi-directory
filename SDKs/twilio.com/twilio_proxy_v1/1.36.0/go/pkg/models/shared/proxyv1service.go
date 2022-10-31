package shared

import (
"time")

type ProxyV1Service struct {
    AccountSid *string `json:"account_sid,omitempty"`
    CallbackURL *string `json:"callback_url,omitempty"`
    ChatInstanceSid *string `json:"chat_instance_sid,omitempty"`
    DateCreated *time.Time `json:"date_created,omitempty"`
    DateUpdated *time.Time `json:"date_updated,omitempty"`
    DefaultTTL *int64 `json:"default_ttl,omitempty"`
    GeoMatchLevel *ServiceEnumGeoMatchLevelEnum `json:"geo_match_level,omitempty"`
    InterceptCallbackURL *string `json:"intercept_callback_url,omitempty"`
    Links map[string]interface{} `json:"links,omitempty"`
    NumberSelectionBehavior *ServiceEnumNumberSelectionBehaviorEnum `json:"number_selection_behavior,omitempty"`
    OutOfSessionCallbackURL *string `json:"out_of_session_callback_url,omitempty"`
    Sid *string `json:"sid,omitempty"`
    UniqueName *string `json:"unique_name,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

