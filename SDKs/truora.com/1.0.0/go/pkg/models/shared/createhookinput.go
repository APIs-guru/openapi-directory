package shared

type CreateHookInputEventTypeEnum string

const (
	CreateHookInputEventTypeEnumAll             CreateHookInputEventTypeEnum = "all"
	CreateHookInputEventTypeEnumCheck           CreateHookInputEventTypeEnum = "check"
	CreateHookInputEventTypeEnumContinuousCheck CreateHookInputEventTypeEnum = "continuous_check"
)

type CreateHookInputStatusEnum string

const (
	CreateHookInputStatusEnumEnabled  CreateHookInputStatusEnum = "enabled"
	CreateHookInputStatusEnumDisabled CreateHookInputStatusEnum = "disabled"
)

type CreateHookInputSubscriberLanguageEnum string

const (
	CreateHookInputSubscriberLanguageEnumAf   CreateHookInputSubscriberLanguageEnum = "af"
	CreateHookInputSubscriberLanguageEnumAr   CreateHookInputSubscriberLanguageEnum = "ar"
	CreateHookInputSubscriberLanguageEnumCa   CreateHookInputSubscriberLanguageEnum = "ca"
	CreateHookInputSubscriberLanguageEnumCs   CreateHookInputSubscriberLanguageEnum = "cs"
	CreateHookInputSubscriberLanguageEnumDa   CreateHookInputSubscriberLanguageEnum = "da"
	CreateHookInputSubscriberLanguageEnumDe   CreateHookInputSubscriberLanguageEnum = "de"
	CreateHookInputSubscriberLanguageEnumEl   CreateHookInputSubscriberLanguageEnum = "el"
	CreateHookInputSubscriberLanguageEnumEn   CreateHookInputSubscriberLanguageEnum = "en"
	CreateHookInputSubscriberLanguageEnumEs   CreateHookInputSubscriberLanguageEnum = "es"
	CreateHookInputSubscriberLanguageEnumFi   CreateHookInputSubscriberLanguageEnum = "fi"
	CreateHookInputSubscriberLanguageEnumFr   CreateHookInputSubscriberLanguageEnum = "fr"
	CreateHookInputSubscriberLanguageEnumHe   CreateHookInputSubscriberLanguageEnum = "he"
	CreateHookInputSubscriberLanguageEnumHi   CreateHookInputSubscriberLanguageEnum = "hi"
	CreateHookInputSubscriberLanguageEnumHr   CreateHookInputSubscriberLanguageEnum = "hr"
	CreateHookInputSubscriberLanguageEnumHu   CreateHookInputSubscriberLanguageEnum = "hu"
	CreateHookInputSubscriberLanguageEnumID   CreateHookInputSubscriberLanguageEnum = "id"
	CreateHookInputSubscriberLanguageEnumIt   CreateHookInputSubscriberLanguageEnum = "it"
	CreateHookInputSubscriberLanguageEnumJa   CreateHookInputSubscriberLanguageEnum = "ja"
	CreateHookInputSubscriberLanguageEnumKo   CreateHookInputSubscriberLanguageEnum = "ko"
	CreateHookInputSubscriberLanguageEnumMs   CreateHookInputSubscriberLanguageEnum = "ms"
	CreateHookInputSubscriberLanguageEnumNb   CreateHookInputSubscriberLanguageEnum = "nb"
	CreateHookInputSubscriberLanguageEnumNl   CreateHookInputSubscriberLanguageEnum = "nl"
	CreateHookInputSubscriberLanguageEnumPl   CreateHookInputSubscriberLanguageEnum = "pl"
	CreateHookInputSubscriberLanguageEnumPt   CreateHookInputSubscriberLanguageEnum = "pt"
	CreateHookInputSubscriberLanguageEnumPrBr CreateHookInputSubscriberLanguageEnum = "pr-BR"
	CreateHookInputSubscriberLanguageEnumRo   CreateHookInputSubscriberLanguageEnum = "ro"
	CreateHookInputSubscriberLanguageEnumRu   CreateHookInputSubscriberLanguageEnum = "ru"
	CreateHookInputSubscriberLanguageEnumSv   CreateHookInputSubscriberLanguageEnum = "sv"
	CreateHookInputSubscriberLanguageEnumTh   CreateHookInputSubscriberLanguageEnum = "th"
	CreateHookInputSubscriberLanguageEnumTl   CreateHookInputSubscriberLanguageEnum = "tl"
	CreateHookInputSubscriberLanguageEnumTr   CreateHookInputSubscriberLanguageEnum = "tr"
	CreateHookInputSubscriberLanguageEnumVi   CreateHookInputSubscriberLanguageEnum = "vi"
	CreateHookInputSubscriberLanguageEnumZh   CreateHookInputSubscriberLanguageEnum = "zh"
	CreateHookInputSubscriberLanguageEnumZhCn CreateHookInputSubscriberLanguageEnum = "zh-CN"
	CreateHookInputSubscriberLanguageEnumZhHk CreateHookInputSubscriberLanguageEnum = "zh-HK"
)

type CreateHookInputSubscriberTypeEnum string

const (
	CreateHookInputSubscriberTypeEnumWeb   CreateHookInputSubscriberTypeEnum = "web"
	CreateHookInputSubscriberTypeEnumEmail CreateHookInputSubscriberTypeEnum = "email"
)

// CreateHookInput
// Creates a hook related to previous created check.
type CreateHookInput struct {
	Actions            []string                               `form:"name=actions"`
	EventType          CreateHookInputEventTypeEnum           `form:"name=event_type"`
	Status             *CreateHookInputStatusEnum             `form:"name=status"`
	SubscriberAddress  *string                                `form:"name=subscriber_address"`
	SubscriberLanguage *CreateHookInputSubscriberLanguageEnum `form:"name=subscriber_language"`
	SubscriberName     *string                                `form:"name=subscriber_name"`
	SubscriberType     CreateHookInputSubscriberTypeEnum      `form:"name=subscriber_type"`
	SubscriberURL      *string                                `form:"name=subscriber_url"`
}
