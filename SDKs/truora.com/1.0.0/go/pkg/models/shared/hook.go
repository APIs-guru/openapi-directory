package shared




type HookEventTypeEnum string

const (
    HookEventTypeEnumAll HookEventTypeEnum = "all"
HookEventTypeEnumCheck HookEventTypeEnum = "check"
)



type HookStatusEnum string

const (
    HookStatusEnumEnabled HookStatusEnum = "enabled"
HookStatusEnumDisabled HookStatusEnum = "disabled"
)


type Hook struct {
    Actions []string `json:"actions,omitempty"`
    EventType *HookEventTypeEnum `json:"event_type,omitempty"`
    SigningKey *string `json:"signing_key,omitempty"`
    Status *HookStatusEnum `json:"status,omitempty"`
    SubscriberType *string `json:"subscriber_type,omitempty"`
    SubscriberURL *string `json:"subscriber_url,omitempty"`
    
}

