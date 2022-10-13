package shared

type HookEventTypeEnum string

const (
	HookEventTypeEnumAll   HookEventTypeEnum = "all"
	HookEventTypeEnumCheck HookEventTypeEnum = "check"
)

type HookStatusEnum string

const (
	HookStatusEnumEnabled  HookStatusEnum = "enabled"
	HookStatusEnumDisabled HookStatusEnum = "disabled"
)

type Hook struct {
	Actions        []string           `json:"actions"`
	EventType      *HookEventTypeEnum `json:"event_type"`
	SigningKey     *string            `json:"signing_key"`
	Status         *HookStatusEnum    `json:"status"`
	SubscriberType *string            `json:"subscriber_type"`
	SubscriberURL  *string            `json:"subscriber_url"`
}
