package shared

import (
	"time"
)

type ProxyV1Service struct {
	AccountSid              *string                                 `json:"account_sid"`
	CallbackURL             *string                                 `json:"callback_url"`
	ChatInstanceSid         *string                                 `json:"chat_instance_sid"`
	DateCreated             *time.Time                              `json:"date_created"`
	DateUpdated             *time.Time                              `json:"date_updated"`
	DefaultTTL              *int64                                  `json:"default_ttl"`
	GeoMatchLevel           *ServiceEnumGeoMatchLevelEnum           `json:"geo_match_level"`
	InterceptCallbackURL    *string                                 `json:"intercept_callback_url"`
	Links                   map[string]interface{}                  `json:"links"`
	NumberSelectionBehavior *ServiceEnumNumberSelectionBehaviorEnum `json:"number_selection_behavior"`
	OutOfSessionCallbackURL *string                                 `json:"out_of_session_callback_url"`
	Sid                     *string                                 `json:"sid"`
	UniqueName              *string                                 `json:"unique_name"`
	URL                     *string                                 `json:"url"`
}
