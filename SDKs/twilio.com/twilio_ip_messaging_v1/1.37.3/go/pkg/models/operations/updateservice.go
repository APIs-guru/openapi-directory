package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateServiceServerList = []string{
	"https://ip-messaging.twilio.com",
}

type UpdateServicePathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateServiceUpdateServiceRequestWebhookMethodEnum string

const (
	UpdateServiceUpdateServiceRequestWebhookMethodEnumHead   UpdateServiceUpdateServiceRequestWebhookMethodEnum = "HEAD"
	UpdateServiceUpdateServiceRequestWebhookMethodEnumGet    UpdateServiceUpdateServiceRequestWebhookMethodEnum = "GET"
	UpdateServiceUpdateServiceRequestWebhookMethodEnumPost   UpdateServiceUpdateServiceRequestWebhookMethodEnum = "POST"
	UpdateServiceUpdateServiceRequestWebhookMethodEnumPatch  UpdateServiceUpdateServiceRequestWebhookMethodEnum = "PATCH"
	UpdateServiceUpdateServiceRequestWebhookMethodEnumPut    UpdateServiceUpdateServiceRequestWebhookMethodEnum = "PUT"
	UpdateServiceUpdateServiceRequestWebhookMethodEnumDelete UpdateServiceUpdateServiceRequestWebhookMethodEnum = "DELETE"
)

type UpdateServiceUpdateServiceRequestWebhooksOnChannelAddMethodEnum string

const (
	UpdateServiceUpdateServiceRequestWebhooksOnChannelAddMethodEnumHead   UpdateServiceUpdateServiceRequestWebhooksOnChannelAddMethodEnum = "HEAD"
	UpdateServiceUpdateServiceRequestWebhooksOnChannelAddMethodEnumGet    UpdateServiceUpdateServiceRequestWebhooksOnChannelAddMethodEnum = "GET"
	UpdateServiceUpdateServiceRequestWebhooksOnChannelAddMethodEnumPost   UpdateServiceUpdateServiceRequestWebhooksOnChannelAddMethodEnum = "POST"
	UpdateServiceUpdateServiceRequestWebhooksOnChannelAddMethodEnumPatch  UpdateServiceUpdateServiceRequestWebhooksOnChannelAddMethodEnum = "PATCH"
	UpdateServiceUpdateServiceRequestWebhooksOnChannelAddMethodEnumPut    UpdateServiceUpdateServiceRequestWebhooksOnChannelAddMethodEnum = "PUT"
	UpdateServiceUpdateServiceRequestWebhooksOnChannelAddMethodEnumDelete UpdateServiceUpdateServiceRequestWebhooksOnChannelAddMethodEnum = "DELETE"
)

type UpdateServiceUpdateServiceRequestWebhooksOnChannelAddedMethodEnum string

const (
	UpdateServiceUpdateServiceRequestWebhooksOnChannelAddedMethodEnumHead   UpdateServiceUpdateServiceRequestWebhooksOnChannelAddedMethodEnum = "HEAD"
	UpdateServiceUpdateServiceRequestWebhooksOnChannelAddedMethodEnumGet    UpdateServiceUpdateServiceRequestWebhooksOnChannelAddedMethodEnum = "GET"
	UpdateServiceUpdateServiceRequestWebhooksOnChannelAddedMethodEnumPost   UpdateServiceUpdateServiceRequestWebhooksOnChannelAddedMethodEnum = "POST"
	UpdateServiceUpdateServiceRequestWebhooksOnChannelAddedMethodEnumPatch  UpdateServiceUpdateServiceRequestWebhooksOnChannelAddedMethodEnum = "PATCH"
	UpdateServiceUpdateServiceRequestWebhooksOnChannelAddedMethodEnumPut    UpdateServiceUpdateServiceRequestWebhooksOnChannelAddedMethodEnum = "PUT"
	UpdateServiceUpdateServiceRequestWebhooksOnChannelAddedMethodEnumDelete UpdateServiceUpdateServiceRequestWebhooksOnChannelAddedMethodEnum = "DELETE"
)

type UpdateServiceUpdateServiceRequestWebhooksOnChannelDestroyMethodEnum string

const (
	UpdateServiceUpdateServiceRequestWebhooksOnChannelDestroyMethodEnumHead   UpdateServiceUpdateServiceRequestWebhooksOnChannelDestroyMethodEnum = "HEAD"
	UpdateServiceUpdateServiceRequestWebhooksOnChannelDestroyMethodEnumGet    UpdateServiceUpdateServiceRequestWebhooksOnChannelDestroyMethodEnum = "GET"
	UpdateServiceUpdateServiceRequestWebhooksOnChannelDestroyMethodEnumPost   UpdateServiceUpdateServiceRequestWebhooksOnChannelDestroyMethodEnum = "POST"
	UpdateServiceUpdateServiceRequestWebhooksOnChannelDestroyMethodEnumPatch  UpdateServiceUpdateServiceRequestWebhooksOnChannelDestroyMethodEnum = "PATCH"
	UpdateServiceUpdateServiceRequestWebhooksOnChannelDestroyMethodEnumPut    UpdateServiceUpdateServiceRequestWebhooksOnChannelDestroyMethodEnum = "PUT"
	UpdateServiceUpdateServiceRequestWebhooksOnChannelDestroyMethodEnumDelete UpdateServiceUpdateServiceRequestWebhooksOnChannelDestroyMethodEnum = "DELETE"
)

type UpdateServiceUpdateServiceRequestWebhooksOnChannelDestroyedMethodEnum string

const (
	UpdateServiceUpdateServiceRequestWebhooksOnChannelDestroyedMethodEnumHead   UpdateServiceUpdateServiceRequestWebhooksOnChannelDestroyedMethodEnum = "HEAD"
	UpdateServiceUpdateServiceRequestWebhooksOnChannelDestroyedMethodEnumGet    UpdateServiceUpdateServiceRequestWebhooksOnChannelDestroyedMethodEnum = "GET"
	UpdateServiceUpdateServiceRequestWebhooksOnChannelDestroyedMethodEnumPost   UpdateServiceUpdateServiceRequestWebhooksOnChannelDestroyedMethodEnum = "POST"
	UpdateServiceUpdateServiceRequestWebhooksOnChannelDestroyedMethodEnumPatch  UpdateServiceUpdateServiceRequestWebhooksOnChannelDestroyedMethodEnum = "PATCH"
	UpdateServiceUpdateServiceRequestWebhooksOnChannelDestroyedMethodEnumPut    UpdateServiceUpdateServiceRequestWebhooksOnChannelDestroyedMethodEnum = "PUT"
	UpdateServiceUpdateServiceRequestWebhooksOnChannelDestroyedMethodEnumDelete UpdateServiceUpdateServiceRequestWebhooksOnChannelDestroyedMethodEnum = "DELETE"
)

type UpdateServiceUpdateServiceRequestWebhooksOnChannelUpdateMethodEnum string

const (
	UpdateServiceUpdateServiceRequestWebhooksOnChannelUpdateMethodEnumHead   UpdateServiceUpdateServiceRequestWebhooksOnChannelUpdateMethodEnum = "HEAD"
	UpdateServiceUpdateServiceRequestWebhooksOnChannelUpdateMethodEnumGet    UpdateServiceUpdateServiceRequestWebhooksOnChannelUpdateMethodEnum = "GET"
	UpdateServiceUpdateServiceRequestWebhooksOnChannelUpdateMethodEnumPost   UpdateServiceUpdateServiceRequestWebhooksOnChannelUpdateMethodEnum = "POST"
	UpdateServiceUpdateServiceRequestWebhooksOnChannelUpdateMethodEnumPatch  UpdateServiceUpdateServiceRequestWebhooksOnChannelUpdateMethodEnum = "PATCH"
	UpdateServiceUpdateServiceRequestWebhooksOnChannelUpdateMethodEnumPut    UpdateServiceUpdateServiceRequestWebhooksOnChannelUpdateMethodEnum = "PUT"
	UpdateServiceUpdateServiceRequestWebhooksOnChannelUpdateMethodEnumDelete UpdateServiceUpdateServiceRequestWebhooksOnChannelUpdateMethodEnum = "DELETE"
)

type UpdateServiceUpdateServiceRequestWebhooksOnChannelUpdatedMethodEnum string

const (
	UpdateServiceUpdateServiceRequestWebhooksOnChannelUpdatedMethodEnumHead   UpdateServiceUpdateServiceRequestWebhooksOnChannelUpdatedMethodEnum = "HEAD"
	UpdateServiceUpdateServiceRequestWebhooksOnChannelUpdatedMethodEnumGet    UpdateServiceUpdateServiceRequestWebhooksOnChannelUpdatedMethodEnum = "GET"
	UpdateServiceUpdateServiceRequestWebhooksOnChannelUpdatedMethodEnumPost   UpdateServiceUpdateServiceRequestWebhooksOnChannelUpdatedMethodEnum = "POST"
	UpdateServiceUpdateServiceRequestWebhooksOnChannelUpdatedMethodEnumPatch  UpdateServiceUpdateServiceRequestWebhooksOnChannelUpdatedMethodEnum = "PATCH"
	UpdateServiceUpdateServiceRequestWebhooksOnChannelUpdatedMethodEnumPut    UpdateServiceUpdateServiceRequestWebhooksOnChannelUpdatedMethodEnum = "PUT"
	UpdateServiceUpdateServiceRequestWebhooksOnChannelUpdatedMethodEnumDelete UpdateServiceUpdateServiceRequestWebhooksOnChannelUpdatedMethodEnum = "DELETE"
)

type UpdateServiceUpdateServiceRequestWebhooksOnMemberAddMethodEnum string

const (
	UpdateServiceUpdateServiceRequestWebhooksOnMemberAddMethodEnumHead   UpdateServiceUpdateServiceRequestWebhooksOnMemberAddMethodEnum = "HEAD"
	UpdateServiceUpdateServiceRequestWebhooksOnMemberAddMethodEnumGet    UpdateServiceUpdateServiceRequestWebhooksOnMemberAddMethodEnum = "GET"
	UpdateServiceUpdateServiceRequestWebhooksOnMemberAddMethodEnumPost   UpdateServiceUpdateServiceRequestWebhooksOnMemberAddMethodEnum = "POST"
	UpdateServiceUpdateServiceRequestWebhooksOnMemberAddMethodEnumPatch  UpdateServiceUpdateServiceRequestWebhooksOnMemberAddMethodEnum = "PATCH"
	UpdateServiceUpdateServiceRequestWebhooksOnMemberAddMethodEnumPut    UpdateServiceUpdateServiceRequestWebhooksOnMemberAddMethodEnum = "PUT"
	UpdateServiceUpdateServiceRequestWebhooksOnMemberAddMethodEnumDelete UpdateServiceUpdateServiceRequestWebhooksOnMemberAddMethodEnum = "DELETE"
)

type UpdateServiceUpdateServiceRequestWebhooksOnMemberAddedMethodEnum string

const (
	UpdateServiceUpdateServiceRequestWebhooksOnMemberAddedMethodEnumHead   UpdateServiceUpdateServiceRequestWebhooksOnMemberAddedMethodEnum = "HEAD"
	UpdateServiceUpdateServiceRequestWebhooksOnMemberAddedMethodEnumGet    UpdateServiceUpdateServiceRequestWebhooksOnMemberAddedMethodEnum = "GET"
	UpdateServiceUpdateServiceRequestWebhooksOnMemberAddedMethodEnumPost   UpdateServiceUpdateServiceRequestWebhooksOnMemberAddedMethodEnum = "POST"
	UpdateServiceUpdateServiceRequestWebhooksOnMemberAddedMethodEnumPatch  UpdateServiceUpdateServiceRequestWebhooksOnMemberAddedMethodEnum = "PATCH"
	UpdateServiceUpdateServiceRequestWebhooksOnMemberAddedMethodEnumPut    UpdateServiceUpdateServiceRequestWebhooksOnMemberAddedMethodEnum = "PUT"
	UpdateServiceUpdateServiceRequestWebhooksOnMemberAddedMethodEnumDelete UpdateServiceUpdateServiceRequestWebhooksOnMemberAddedMethodEnum = "DELETE"
)

type UpdateServiceUpdateServiceRequestWebhooksOnMemberRemoveMethodEnum string

const (
	UpdateServiceUpdateServiceRequestWebhooksOnMemberRemoveMethodEnumHead   UpdateServiceUpdateServiceRequestWebhooksOnMemberRemoveMethodEnum = "HEAD"
	UpdateServiceUpdateServiceRequestWebhooksOnMemberRemoveMethodEnumGet    UpdateServiceUpdateServiceRequestWebhooksOnMemberRemoveMethodEnum = "GET"
	UpdateServiceUpdateServiceRequestWebhooksOnMemberRemoveMethodEnumPost   UpdateServiceUpdateServiceRequestWebhooksOnMemberRemoveMethodEnum = "POST"
	UpdateServiceUpdateServiceRequestWebhooksOnMemberRemoveMethodEnumPatch  UpdateServiceUpdateServiceRequestWebhooksOnMemberRemoveMethodEnum = "PATCH"
	UpdateServiceUpdateServiceRequestWebhooksOnMemberRemoveMethodEnumPut    UpdateServiceUpdateServiceRequestWebhooksOnMemberRemoveMethodEnum = "PUT"
	UpdateServiceUpdateServiceRequestWebhooksOnMemberRemoveMethodEnumDelete UpdateServiceUpdateServiceRequestWebhooksOnMemberRemoveMethodEnum = "DELETE"
)

type UpdateServiceUpdateServiceRequestWebhooksOnMemberRemovedMethodEnum string

const (
	UpdateServiceUpdateServiceRequestWebhooksOnMemberRemovedMethodEnumHead   UpdateServiceUpdateServiceRequestWebhooksOnMemberRemovedMethodEnum = "HEAD"
	UpdateServiceUpdateServiceRequestWebhooksOnMemberRemovedMethodEnumGet    UpdateServiceUpdateServiceRequestWebhooksOnMemberRemovedMethodEnum = "GET"
	UpdateServiceUpdateServiceRequestWebhooksOnMemberRemovedMethodEnumPost   UpdateServiceUpdateServiceRequestWebhooksOnMemberRemovedMethodEnum = "POST"
	UpdateServiceUpdateServiceRequestWebhooksOnMemberRemovedMethodEnumPatch  UpdateServiceUpdateServiceRequestWebhooksOnMemberRemovedMethodEnum = "PATCH"
	UpdateServiceUpdateServiceRequestWebhooksOnMemberRemovedMethodEnumPut    UpdateServiceUpdateServiceRequestWebhooksOnMemberRemovedMethodEnum = "PUT"
	UpdateServiceUpdateServiceRequestWebhooksOnMemberRemovedMethodEnumDelete UpdateServiceUpdateServiceRequestWebhooksOnMemberRemovedMethodEnum = "DELETE"
)

type UpdateServiceUpdateServiceRequestWebhooksOnMessageRemoveMethodEnum string

const (
	UpdateServiceUpdateServiceRequestWebhooksOnMessageRemoveMethodEnumHead   UpdateServiceUpdateServiceRequestWebhooksOnMessageRemoveMethodEnum = "HEAD"
	UpdateServiceUpdateServiceRequestWebhooksOnMessageRemoveMethodEnumGet    UpdateServiceUpdateServiceRequestWebhooksOnMessageRemoveMethodEnum = "GET"
	UpdateServiceUpdateServiceRequestWebhooksOnMessageRemoveMethodEnumPost   UpdateServiceUpdateServiceRequestWebhooksOnMessageRemoveMethodEnum = "POST"
	UpdateServiceUpdateServiceRequestWebhooksOnMessageRemoveMethodEnumPatch  UpdateServiceUpdateServiceRequestWebhooksOnMessageRemoveMethodEnum = "PATCH"
	UpdateServiceUpdateServiceRequestWebhooksOnMessageRemoveMethodEnumPut    UpdateServiceUpdateServiceRequestWebhooksOnMessageRemoveMethodEnum = "PUT"
	UpdateServiceUpdateServiceRequestWebhooksOnMessageRemoveMethodEnumDelete UpdateServiceUpdateServiceRequestWebhooksOnMessageRemoveMethodEnum = "DELETE"
)

type UpdateServiceUpdateServiceRequestWebhooksOnMessageRemovedMethodEnum string

const (
	UpdateServiceUpdateServiceRequestWebhooksOnMessageRemovedMethodEnumHead   UpdateServiceUpdateServiceRequestWebhooksOnMessageRemovedMethodEnum = "HEAD"
	UpdateServiceUpdateServiceRequestWebhooksOnMessageRemovedMethodEnumGet    UpdateServiceUpdateServiceRequestWebhooksOnMessageRemovedMethodEnum = "GET"
	UpdateServiceUpdateServiceRequestWebhooksOnMessageRemovedMethodEnumPost   UpdateServiceUpdateServiceRequestWebhooksOnMessageRemovedMethodEnum = "POST"
	UpdateServiceUpdateServiceRequestWebhooksOnMessageRemovedMethodEnumPatch  UpdateServiceUpdateServiceRequestWebhooksOnMessageRemovedMethodEnum = "PATCH"
	UpdateServiceUpdateServiceRequestWebhooksOnMessageRemovedMethodEnumPut    UpdateServiceUpdateServiceRequestWebhooksOnMessageRemovedMethodEnum = "PUT"
	UpdateServiceUpdateServiceRequestWebhooksOnMessageRemovedMethodEnumDelete UpdateServiceUpdateServiceRequestWebhooksOnMessageRemovedMethodEnum = "DELETE"
)

type UpdateServiceUpdateServiceRequestWebhooksOnMessageSendMethodEnum string

const (
	UpdateServiceUpdateServiceRequestWebhooksOnMessageSendMethodEnumHead   UpdateServiceUpdateServiceRequestWebhooksOnMessageSendMethodEnum = "HEAD"
	UpdateServiceUpdateServiceRequestWebhooksOnMessageSendMethodEnumGet    UpdateServiceUpdateServiceRequestWebhooksOnMessageSendMethodEnum = "GET"
	UpdateServiceUpdateServiceRequestWebhooksOnMessageSendMethodEnumPost   UpdateServiceUpdateServiceRequestWebhooksOnMessageSendMethodEnum = "POST"
	UpdateServiceUpdateServiceRequestWebhooksOnMessageSendMethodEnumPatch  UpdateServiceUpdateServiceRequestWebhooksOnMessageSendMethodEnum = "PATCH"
	UpdateServiceUpdateServiceRequestWebhooksOnMessageSendMethodEnumPut    UpdateServiceUpdateServiceRequestWebhooksOnMessageSendMethodEnum = "PUT"
	UpdateServiceUpdateServiceRequestWebhooksOnMessageSendMethodEnumDelete UpdateServiceUpdateServiceRequestWebhooksOnMessageSendMethodEnum = "DELETE"
)

type UpdateServiceUpdateServiceRequestWebhooksOnMessageSentMethodEnum string

const (
	UpdateServiceUpdateServiceRequestWebhooksOnMessageSentMethodEnumHead   UpdateServiceUpdateServiceRequestWebhooksOnMessageSentMethodEnum = "HEAD"
	UpdateServiceUpdateServiceRequestWebhooksOnMessageSentMethodEnumGet    UpdateServiceUpdateServiceRequestWebhooksOnMessageSentMethodEnum = "GET"
	UpdateServiceUpdateServiceRequestWebhooksOnMessageSentMethodEnumPost   UpdateServiceUpdateServiceRequestWebhooksOnMessageSentMethodEnum = "POST"
	UpdateServiceUpdateServiceRequestWebhooksOnMessageSentMethodEnumPatch  UpdateServiceUpdateServiceRequestWebhooksOnMessageSentMethodEnum = "PATCH"
	UpdateServiceUpdateServiceRequestWebhooksOnMessageSentMethodEnumPut    UpdateServiceUpdateServiceRequestWebhooksOnMessageSentMethodEnum = "PUT"
	UpdateServiceUpdateServiceRequestWebhooksOnMessageSentMethodEnumDelete UpdateServiceUpdateServiceRequestWebhooksOnMessageSentMethodEnum = "DELETE"
)

type UpdateServiceUpdateServiceRequestWebhooksOnMessageUpdateMethodEnum string

const (
	UpdateServiceUpdateServiceRequestWebhooksOnMessageUpdateMethodEnumHead   UpdateServiceUpdateServiceRequestWebhooksOnMessageUpdateMethodEnum = "HEAD"
	UpdateServiceUpdateServiceRequestWebhooksOnMessageUpdateMethodEnumGet    UpdateServiceUpdateServiceRequestWebhooksOnMessageUpdateMethodEnum = "GET"
	UpdateServiceUpdateServiceRequestWebhooksOnMessageUpdateMethodEnumPost   UpdateServiceUpdateServiceRequestWebhooksOnMessageUpdateMethodEnum = "POST"
	UpdateServiceUpdateServiceRequestWebhooksOnMessageUpdateMethodEnumPatch  UpdateServiceUpdateServiceRequestWebhooksOnMessageUpdateMethodEnum = "PATCH"
	UpdateServiceUpdateServiceRequestWebhooksOnMessageUpdateMethodEnumPut    UpdateServiceUpdateServiceRequestWebhooksOnMessageUpdateMethodEnum = "PUT"
	UpdateServiceUpdateServiceRequestWebhooksOnMessageUpdateMethodEnumDelete UpdateServiceUpdateServiceRequestWebhooksOnMessageUpdateMethodEnum = "DELETE"
)

type UpdateServiceUpdateServiceRequestWebhooksOnMessageUpdatedMethodEnum string

const (
	UpdateServiceUpdateServiceRequestWebhooksOnMessageUpdatedMethodEnumHead   UpdateServiceUpdateServiceRequestWebhooksOnMessageUpdatedMethodEnum = "HEAD"
	UpdateServiceUpdateServiceRequestWebhooksOnMessageUpdatedMethodEnumGet    UpdateServiceUpdateServiceRequestWebhooksOnMessageUpdatedMethodEnum = "GET"
	UpdateServiceUpdateServiceRequestWebhooksOnMessageUpdatedMethodEnumPost   UpdateServiceUpdateServiceRequestWebhooksOnMessageUpdatedMethodEnum = "POST"
	UpdateServiceUpdateServiceRequestWebhooksOnMessageUpdatedMethodEnumPatch  UpdateServiceUpdateServiceRequestWebhooksOnMessageUpdatedMethodEnum = "PATCH"
	UpdateServiceUpdateServiceRequestWebhooksOnMessageUpdatedMethodEnumPut    UpdateServiceUpdateServiceRequestWebhooksOnMessageUpdatedMethodEnum = "PUT"
	UpdateServiceUpdateServiceRequestWebhooksOnMessageUpdatedMethodEnumDelete UpdateServiceUpdateServiceRequestWebhooksOnMessageUpdatedMethodEnum = "DELETE"
)

type UpdateServiceUpdateServiceRequest struct {
	ConsumptionReportInterval               *int64                                                                 `form:"name=ConsumptionReportInterval"`
	DefaultChannelCreatorRoleSid            *string                                                                `form:"name=DefaultChannelCreatorRoleSid"`
	DefaultChannelRoleSid                   *string                                                                `form:"name=DefaultChannelRoleSid"`
	DefaultServiceRoleSid                   *string                                                                `form:"name=DefaultServiceRoleSid"`
	FriendlyName                            *string                                                                `form:"name=FriendlyName"`
	LimitsChannelMembers                    *int64                                                                 `form:"name=Limits.ChannelMembers"`
	LimitsUserChannels                      *int64                                                                 `form:"name=Limits.UserChannels"`
	NotificationsAddedToChannelEnabled      *bool                                                                  `form:"name=Notifications.AddedToChannel.Enabled"`
	NotificationsAddedToChannelTemplate     *string                                                                `form:"name=Notifications.AddedToChannel.Template"`
	NotificationsInvitedToChannelEnabled    *bool                                                                  `form:"name=Notifications.InvitedToChannel.Enabled"`
	NotificationsInvitedToChannelTemplate   *string                                                                `form:"name=Notifications.InvitedToChannel.Template"`
	NotificationsNewMessageEnabled          *bool                                                                  `form:"name=Notifications.NewMessage.Enabled"`
	NotificationsNewMessageTemplate         *string                                                                `form:"name=Notifications.NewMessage.Template"`
	NotificationsRemovedFromChannelEnabled  *bool                                                                  `form:"name=Notifications.RemovedFromChannel.Enabled"`
	NotificationsRemovedFromChannelTemplate *string                                                                `form:"name=Notifications.RemovedFromChannel.Template"`
	PostWebhookURL                          *string                                                                `form:"name=PostWebhookUrl"`
	PreWebhookURL                           *string                                                                `form:"name=PreWebhookUrl"`
	ReachabilityEnabled                     *bool                                                                  `form:"name=ReachabilityEnabled"`
	ReadStatusEnabled                       *bool                                                                  `form:"name=ReadStatusEnabled"`
	TypingIndicatorTimeout                  *int64                                                                 `form:"name=TypingIndicatorTimeout"`
	WebhookFilters                          []string                                                               `form:"name=WebhookFilters"`
	WebhookMethod                           *UpdateServiceUpdateServiceRequestWebhookMethodEnum                    `form:"name=WebhookMethod"`
	WebhooksOnChannelAddMethod              *UpdateServiceUpdateServiceRequestWebhooksOnChannelAddMethodEnum       `form:"name=Webhooks.OnChannelAdd.Method"`
	WebhooksOnChannelAddURL                 *string                                                                `form:"name=Webhooks.OnChannelAdd.Url"`
	WebhooksOnChannelAddedMethod            *UpdateServiceUpdateServiceRequestWebhooksOnChannelAddedMethodEnum     `form:"name=Webhooks.OnChannelAdded.Method"`
	WebhooksOnChannelAddedURL               *string                                                                `form:"name=Webhooks.OnChannelAdded.Url"`
	WebhooksOnChannelDestroyMethod          *UpdateServiceUpdateServiceRequestWebhooksOnChannelDestroyMethodEnum   `form:"name=Webhooks.OnChannelDestroy.Method"`
	WebhooksOnChannelDestroyURL             *string                                                                `form:"name=Webhooks.OnChannelDestroy.Url"`
	WebhooksOnChannelDestroyedMethod        *UpdateServiceUpdateServiceRequestWebhooksOnChannelDestroyedMethodEnum `form:"name=Webhooks.OnChannelDestroyed.Method"`
	WebhooksOnChannelDestroyedURL           *string                                                                `form:"name=Webhooks.OnChannelDestroyed.Url"`
	WebhooksOnChannelUpdateMethod           *UpdateServiceUpdateServiceRequestWebhooksOnChannelUpdateMethodEnum    `form:"name=Webhooks.OnChannelUpdate.Method"`
	WebhooksOnChannelUpdateURL              *string                                                                `form:"name=Webhooks.OnChannelUpdate.Url"`
	WebhooksOnChannelUpdatedMethod          *UpdateServiceUpdateServiceRequestWebhooksOnChannelUpdatedMethodEnum   `form:"name=Webhooks.OnChannelUpdated.Method"`
	WebhooksOnChannelUpdatedURL             *string                                                                `form:"name=Webhooks.OnChannelUpdated.Url"`
	WebhooksOnMemberAddMethod               *UpdateServiceUpdateServiceRequestWebhooksOnMemberAddMethodEnum        `form:"name=Webhooks.OnMemberAdd.Method"`
	WebhooksOnMemberAddURL                  *string                                                                `form:"name=Webhooks.OnMemberAdd.Url"`
	WebhooksOnMemberAddedMethod             *UpdateServiceUpdateServiceRequestWebhooksOnMemberAddedMethodEnum      `form:"name=Webhooks.OnMemberAdded.Method"`
	WebhooksOnMemberAddedURL                *string                                                                `form:"name=Webhooks.OnMemberAdded.Url"`
	WebhooksOnMemberRemoveMethod            *UpdateServiceUpdateServiceRequestWebhooksOnMemberRemoveMethodEnum     `form:"name=Webhooks.OnMemberRemove.Method"`
	WebhooksOnMemberRemoveURL               *string                                                                `form:"name=Webhooks.OnMemberRemove.Url"`
	WebhooksOnMemberRemovedMethod           *UpdateServiceUpdateServiceRequestWebhooksOnMemberRemovedMethodEnum    `form:"name=Webhooks.OnMemberRemoved.Method"`
	WebhooksOnMemberRemovedURL              *string                                                                `form:"name=Webhooks.OnMemberRemoved.Url"`
	WebhooksOnMessageRemoveMethod           *UpdateServiceUpdateServiceRequestWebhooksOnMessageRemoveMethodEnum    `form:"name=Webhooks.OnMessageRemove.Method"`
	WebhooksOnMessageRemoveURL              *string                                                                `form:"name=Webhooks.OnMessageRemove.Url"`
	WebhooksOnMessageRemovedMethod          *UpdateServiceUpdateServiceRequestWebhooksOnMessageRemovedMethodEnum   `form:"name=Webhooks.OnMessageRemoved.Method"`
	WebhooksOnMessageRemovedURL             *string                                                                `form:"name=Webhooks.OnMessageRemoved.Url"`
	WebhooksOnMessageSendMethod             *UpdateServiceUpdateServiceRequestWebhooksOnMessageSendMethodEnum      `form:"name=Webhooks.OnMessageSend.Method"`
	WebhooksOnMessageSendURL                *string                                                                `form:"name=Webhooks.OnMessageSend.Url"`
	WebhooksOnMessageSentMethod             *UpdateServiceUpdateServiceRequestWebhooksOnMessageSentMethodEnum      `form:"name=Webhooks.OnMessageSent.Method"`
	WebhooksOnMessageSentURL                *string                                                                `form:"name=Webhooks.OnMessageSent.Url"`
	WebhooksOnMessageUpdateMethod           *UpdateServiceUpdateServiceRequestWebhooksOnMessageUpdateMethodEnum    `form:"name=Webhooks.OnMessageUpdate.Method"`
	WebhooksOnMessageUpdateURL              *string                                                                `form:"name=Webhooks.OnMessageUpdate.Url"`
	WebhooksOnMessageUpdatedMethod          *UpdateServiceUpdateServiceRequestWebhooksOnMessageUpdatedMethodEnum   `form:"name=Webhooks.OnMessageUpdated.Method"`
	WebhooksOnMessageUpdatedURL             *string                                                                `form:"name=Webhooks.OnMessageUpdated.Url"`
}

type UpdateServiceSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateServiceRequest struct {
	ServerURL  *string
	PathParams UpdateServicePathParams
	Request    *UpdateServiceUpdateServiceRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateServiceSecurity
}

type UpdateServiceResponse struct {
	ContentType          string
	StatusCode           int64
	IPMessagingV1Service *shared.IPMessagingV1Service
}
