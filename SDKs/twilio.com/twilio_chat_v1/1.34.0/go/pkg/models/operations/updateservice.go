package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateServiceServers = []string{
	"https://chat.twilio.com",
}

type UpdateServicePathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateServiceRequestBodyWebhookMethodEnum string

const (
	UpdateServiceRequestBodyWebhookMethodEnumHead   UpdateServiceRequestBodyWebhookMethodEnum = "HEAD"
	UpdateServiceRequestBodyWebhookMethodEnumGet    UpdateServiceRequestBodyWebhookMethodEnum = "GET"
	UpdateServiceRequestBodyWebhookMethodEnumPost   UpdateServiceRequestBodyWebhookMethodEnum = "POST"
	UpdateServiceRequestBodyWebhookMethodEnumPatch  UpdateServiceRequestBodyWebhookMethodEnum = "PATCH"
	UpdateServiceRequestBodyWebhookMethodEnumPut    UpdateServiceRequestBodyWebhookMethodEnum = "PUT"
	UpdateServiceRequestBodyWebhookMethodEnumDelete UpdateServiceRequestBodyWebhookMethodEnum = "DELETE"
)

type UpdateServiceRequestBodyWebhooksOnChannelAddMethodEnum string

const (
	UpdateServiceRequestBodyWebhooksOnChannelAddMethodEnumHead   UpdateServiceRequestBodyWebhooksOnChannelAddMethodEnum = "HEAD"
	UpdateServiceRequestBodyWebhooksOnChannelAddMethodEnumGet    UpdateServiceRequestBodyWebhooksOnChannelAddMethodEnum = "GET"
	UpdateServiceRequestBodyWebhooksOnChannelAddMethodEnumPost   UpdateServiceRequestBodyWebhooksOnChannelAddMethodEnum = "POST"
	UpdateServiceRequestBodyWebhooksOnChannelAddMethodEnumPatch  UpdateServiceRequestBodyWebhooksOnChannelAddMethodEnum = "PATCH"
	UpdateServiceRequestBodyWebhooksOnChannelAddMethodEnumPut    UpdateServiceRequestBodyWebhooksOnChannelAddMethodEnum = "PUT"
	UpdateServiceRequestBodyWebhooksOnChannelAddMethodEnumDelete UpdateServiceRequestBodyWebhooksOnChannelAddMethodEnum = "DELETE"
)

type UpdateServiceRequestBodyWebhooksOnChannelAddedMethodEnum string

const (
	UpdateServiceRequestBodyWebhooksOnChannelAddedMethodEnumHead   UpdateServiceRequestBodyWebhooksOnChannelAddedMethodEnum = "HEAD"
	UpdateServiceRequestBodyWebhooksOnChannelAddedMethodEnumGet    UpdateServiceRequestBodyWebhooksOnChannelAddedMethodEnum = "GET"
	UpdateServiceRequestBodyWebhooksOnChannelAddedMethodEnumPost   UpdateServiceRequestBodyWebhooksOnChannelAddedMethodEnum = "POST"
	UpdateServiceRequestBodyWebhooksOnChannelAddedMethodEnumPatch  UpdateServiceRequestBodyWebhooksOnChannelAddedMethodEnum = "PATCH"
	UpdateServiceRequestBodyWebhooksOnChannelAddedMethodEnumPut    UpdateServiceRequestBodyWebhooksOnChannelAddedMethodEnum = "PUT"
	UpdateServiceRequestBodyWebhooksOnChannelAddedMethodEnumDelete UpdateServiceRequestBodyWebhooksOnChannelAddedMethodEnum = "DELETE"
)

type UpdateServiceRequestBodyWebhooksOnChannelDestroyMethodEnum string

const (
	UpdateServiceRequestBodyWebhooksOnChannelDestroyMethodEnumHead   UpdateServiceRequestBodyWebhooksOnChannelDestroyMethodEnum = "HEAD"
	UpdateServiceRequestBodyWebhooksOnChannelDestroyMethodEnumGet    UpdateServiceRequestBodyWebhooksOnChannelDestroyMethodEnum = "GET"
	UpdateServiceRequestBodyWebhooksOnChannelDestroyMethodEnumPost   UpdateServiceRequestBodyWebhooksOnChannelDestroyMethodEnum = "POST"
	UpdateServiceRequestBodyWebhooksOnChannelDestroyMethodEnumPatch  UpdateServiceRequestBodyWebhooksOnChannelDestroyMethodEnum = "PATCH"
	UpdateServiceRequestBodyWebhooksOnChannelDestroyMethodEnumPut    UpdateServiceRequestBodyWebhooksOnChannelDestroyMethodEnum = "PUT"
	UpdateServiceRequestBodyWebhooksOnChannelDestroyMethodEnumDelete UpdateServiceRequestBodyWebhooksOnChannelDestroyMethodEnum = "DELETE"
)

type UpdateServiceRequestBodyWebhooksOnChannelDestroyedMethodEnum string

const (
	UpdateServiceRequestBodyWebhooksOnChannelDestroyedMethodEnumHead   UpdateServiceRequestBodyWebhooksOnChannelDestroyedMethodEnum = "HEAD"
	UpdateServiceRequestBodyWebhooksOnChannelDestroyedMethodEnumGet    UpdateServiceRequestBodyWebhooksOnChannelDestroyedMethodEnum = "GET"
	UpdateServiceRequestBodyWebhooksOnChannelDestroyedMethodEnumPost   UpdateServiceRequestBodyWebhooksOnChannelDestroyedMethodEnum = "POST"
	UpdateServiceRequestBodyWebhooksOnChannelDestroyedMethodEnumPatch  UpdateServiceRequestBodyWebhooksOnChannelDestroyedMethodEnum = "PATCH"
	UpdateServiceRequestBodyWebhooksOnChannelDestroyedMethodEnumPut    UpdateServiceRequestBodyWebhooksOnChannelDestroyedMethodEnum = "PUT"
	UpdateServiceRequestBodyWebhooksOnChannelDestroyedMethodEnumDelete UpdateServiceRequestBodyWebhooksOnChannelDestroyedMethodEnum = "DELETE"
)

type UpdateServiceRequestBodyWebhooksOnChannelUpdateMethodEnum string

const (
	UpdateServiceRequestBodyWebhooksOnChannelUpdateMethodEnumHead   UpdateServiceRequestBodyWebhooksOnChannelUpdateMethodEnum = "HEAD"
	UpdateServiceRequestBodyWebhooksOnChannelUpdateMethodEnumGet    UpdateServiceRequestBodyWebhooksOnChannelUpdateMethodEnum = "GET"
	UpdateServiceRequestBodyWebhooksOnChannelUpdateMethodEnumPost   UpdateServiceRequestBodyWebhooksOnChannelUpdateMethodEnum = "POST"
	UpdateServiceRequestBodyWebhooksOnChannelUpdateMethodEnumPatch  UpdateServiceRequestBodyWebhooksOnChannelUpdateMethodEnum = "PATCH"
	UpdateServiceRequestBodyWebhooksOnChannelUpdateMethodEnumPut    UpdateServiceRequestBodyWebhooksOnChannelUpdateMethodEnum = "PUT"
	UpdateServiceRequestBodyWebhooksOnChannelUpdateMethodEnumDelete UpdateServiceRequestBodyWebhooksOnChannelUpdateMethodEnum = "DELETE"
)

type UpdateServiceRequestBodyWebhooksOnChannelUpdatedMethodEnum string

const (
	UpdateServiceRequestBodyWebhooksOnChannelUpdatedMethodEnumHead   UpdateServiceRequestBodyWebhooksOnChannelUpdatedMethodEnum = "HEAD"
	UpdateServiceRequestBodyWebhooksOnChannelUpdatedMethodEnumGet    UpdateServiceRequestBodyWebhooksOnChannelUpdatedMethodEnum = "GET"
	UpdateServiceRequestBodyWebhooksOnChannelUpdatedMethodEnumPost   UpdateServiceRequestBodyWebhooksOnChannelUpdatedMethodEnum = "POST"
	UpdateServiceRequestBodyWebhooksOnChannelUpdatedMethodEnumPatch  UpdateServiceRequestBodyWebhooksOnChannelUpdatedMethodEnum = "PATCH"
	UpdateServiceRequestBodyWebhooksOnChannelUpdatedMethodEnumPut    UpdateServiceRequestBodyWebhooksOnChannelUpdatedMethodEnum = "PUT"
	UpdateServiceRequestBodyWebhooksOnChannelUpdatedMethodEnumDelete UpdateServiceRequestBodyWebhooksOnChannelUpdatedMethodEnum = "DELETE"
)

type UpdateServiceRequestBodyWebhooksOnMemberAddMethodEnum string

const (
	UpdateServiceRequestBodyWebhooksOnMemberAddMethodEnumHead   UpdateServiceRequestBodyWebhooksOnMemberAddMethodEnum = "HEAD"
	UpdateServiceRequestBodyWebhooksOnMemberAddMethodEnumGet    UpdateServiceRequestBodyWebhooksOnMemberAddMethodEnum = "GET"
	UpdateServiceRequestBodyWebhooksOnMemberAddMethodEnumPost   UpdateServiceRequestBodyWebhooksOnMemberAddMethodEnum = "POST"
	UpdateServiceRequestBodyWebhooksOnMemberAddMethodEnumPatch  UpdateServiceRequestBodyWebhooksOnMemberAddMethodEnum = "PATCH"
	UpdateServiceRequestBodyWebhooksOnMemberAddMethodEnumPut    UpdateServiceRequestBodyWebhooksOnMemberAddMethodEnum = "PUT"
	UpdateServiceRequestBodyWebhooksOnMemberAddMethodEnumDelete UpdateServiceRequestBodyWebhooksOnMemberAddMethodEnum = "DELETE"
)

type UpdateServiceRequestBodyWebhooksOnMemberAddedMethodEnum string

const (
	UpdateServiceRequestBodyWebhooksOnMemberAddedMethodEnumHead   UpdateServiceRequestBodyWebhooksOnMemberAddedMethodEnum = "HEAD"
	UpdateServiceRequestBodyWebhooksOnMemberAddedMethodEnumGet    UpdateServiceRequestBodyWebhooksOnMemberAddedMethodEnum = "GET"
	UpdateServiceRequestBodyWebhooksOnMemberAddedMethodEnumPost   UpdateServiceRequestBodyWebhooksOnMemberAddedMethodEnum = "POST"
	UpdateServiceRequestBodyWebhooksOnMemberAddedMethodEnumPatch  UpdateServiceRequestBodyWebhooksOnMemberAddedMethodEnum = "PATCH"
	UpdateServiceRequestBodyWebhooksOnMemberAddedMethodEnumPut    UpdateServiceRequestBodyWebhooksOnMemberAddedMethodEnum = "PUT"
	UpdateServiceRequestBodyWebhooksOnMemberAddedMethodEnumDelete UpdateServiceRequestBodyWebhooksOnMemberAddedMethodEnum = "DELETE"
)

type UpdateServiceRequestBodyWebhooksOnMemberRemoveMethodEnum string

const (
	UpdateServiceRequestBodyWebhooksOnMemberRemoveMethodEnumHead   UpdateServiceRequestBodyWebhooksOnMemberRemoveMethodEnum = "HEAD"
	UpdateServiceRequestBodyWebhooksOnMemberRemoveMethodEnumGet    UpdateServiceRequestBodyWebhooksOnMemberRemoveMethodEnum = "GET"
	UpdateServiceRequestBodyWebhooksOnMemberRemoveMethodEnumPost   UpdateServiceRequestBodyWebhooksOnMemberRemoveMethodEnum = "POST"
	UpdateServiceRequestBodyWebhooksOnMemberRemoveMethodEnumPatch  UpdateServiceRequestBodyWebhooksOnMemberRemoveMethodEnum = "PATCH"
	UpdateServiceRequestBodyWebhooksOnMemberRemoveMethodEnumPut    UpdateServiceRequestBodyWebhooksOnMemberRemoveMethodEnum = "PUT"
	UpdateServiceRequestBodyWebhooksOnMemberRemoveMethodEnumDelete UpdateServiceRequestBodyWebhooksOnMemberRemoveMethodEnum = "DELETE"
)

type UpdateServiceRequestBodyWebhooksOnMemberRemovedMethodEnum string

const (
	UpdateServiceRequestBodyWebhooksOnMemberRemovedMethodEnumHead   UpdateServiceRequestBodyWebhooksOnMemberRemovedMethodEnum = "HEAD"
	UpdateServiceRequestBodyWebhooksOnMemberRemovedMethodEnumGet    UpdateServiceRequestBodyWebhooksOnMemberRemovedMethodEnum = "GET"
	UpdateServiceRequestBodyWebhooksOnMemberRemovedMethodEnumPost   UpdateServiceRequestBodyWebhooksOnMemberRemovedMethodEnum = "POST"
	UpdateServiceRequestBodyWebhooksOnMemberRemovedMethodEnumPatch  UpdateServiceRequestBodyWebhooksOnMemberRemovedMethodEnum = "PATCH"
	UpdateServiceRequestBodyWebhooksOnMemberRemovedMethodEnumPut    UpdateServiceRequestBodyWebhooksOnMemberRemovedMethodEnum = "PUT"
	UpdateServiceRequestBodyWebhooksOnMemberRemovedMethodEnumDelete UpdateServiceRequestBodyWebhooksOnMemberRemovedMethodEnum = "DELETE"
)

type UpdateServiceRequestBodyWebhooksOnMessageRemoveMethodEnum string

const (
	UpdateServiceRequestBodyWebhooksOnMessageRemoveMethodEnumHead   UpdateServiceRequestBodyWebhooksOnMessageRemoveMethodEnum = "HEAD"
	UpdateServiceRequestBodyWebhooksOnMessageRemoveMethodEnumGet    UpdateServiceRequestBodyWebhooksOnMessageRemoveMethodEnum = "GET"
	UpdateServiceRequestBodyWebhooksOnMessageRemoveMethodEnumPost   UpdateServiceRequestBodyWebhooksOnMessageRemoveMethodEnum = "POST"
	UpdateServiceRequestBodyWebhooksOnMessageRemoveMethodEnumPatch  UpdateServiceRequestBodyWebhooksOnMessageRemoveMethodEnum = "PATCH"
	UpdateServiceRequestBodyWebhooksOnMessageRemoveMethodEnumPut    UpdateServiceRequestBodyWebhooksOnMessageRemoveMethodEnum = "PUT"
	UpdateServiceRequestBodyWebhooksOnMessageRemoveMethodEnumDelete UpdateServiceRequestBodyWebhooksOnMessageRemoveMethodEnum = "DELETE"
)

type UpdateServiceRequestBodyWebhooksOnMessageRemovedMethodEnum string

const (
	UpdateServiceRequestBodyWebhooksOnMessageRemovedMethodEnumHead   UpdateServiceRequestBodyWebhooksOnMessageRemovedMethodEnum = "HEAD"
	UpdateServiceRequestBodyWebhooksOnMessageRemovedMethodEnumGet    UpdateServiceRequestBodyWebhooksOnMessageRemovedMethodEnum = "GET"
	UpdateServiceRequestBodyWebhooksOnMessageRemovedMethodEnumPost   UpdateServiceRequestBodyWebhooksOnMessageRemovedMethodEnum = "POST"
	UpdateServiceRequestBodyWebhooksOnMessageRemovedMethodEnumPatch  UpdateServiceRequestBodyWebhooksOnMessageRemovedMethodEnum = "PATCH"
	UpdateServiceRequestBodyWebhooksOnMessageRemovedMethodEnumPut    UpdateServiceRequestBodyWebhooksOnMessageRemovedMethodEnum = "PUT"
	UpdateServiceRequestBodyWebhooksOnMessageRemovedMethodEnumDelete UpdateServiceRequestBodyWebhooksOnMessageRemovedMethodEnum = "DELETE"
)

type UpdateServiceRequestBodyWebhooksOnMessageSendMethodEnum string

const (
	UpdateServiceRequestBodyWebhooksOnMessageSendMethodEnumHead   UpdateServiceRequestBodyWebhooksOnMessageSendMethodEnum = "HEAD"
	UpdateServiceRequestBodyWebhooksOnMessageSendMethodEnumGet    UpdateServiceRequestBodyWebhooksOnMessageSendMethodEnum = "GET"
	UpdateServiceRequestBodyWebhooksOnMessageSendMethodEnumPost   UpdateServiceRequestBodyWebhooksOnMessageSendMethodEnum = "POST"
	UpdateServiceRequestBodyWebhooksOnMessageSendMethodEnumPatch  UpdateServiceRequestBodyWebhooksOnMessageSendMethodEnum = "PATCH"
	UpdateServiceRequestBodyWebhooksOnMessageSendMethodEnumPut    UpdateServiceRequestBodyWebhooksOnMessageSendMethodEnum = "PUT"
	UpdateServiceRequestBodyWebhooksOnMessageSendMethodEnumDelete UpdateServiceRequestBodyWebhooksOnMessageSendMethodEnum = "DELETE"
)

type UpdateServiceRequestBodyWebhooksOnMessageSentMethodEnum string

const (
	UpdateServiceRequestBodyWebhooksOnMessageSentMethodEnumHead   UpdateServiceRequestBodyWebhooksOnMessageSentMethodEnum = "HEAD"
	UpdateServiceRequestBodyWebhooksOnMessageSentMethodEnumGet    UpdateServiceRequestBodyWebhooksOnMessageSentMethodEnum = "GET"
	UpdateServiceRequestBodyWebhooksOnMessageSentMethodEnumPost   UpdateServiceRequestBodyWebhooksOnMessageSentMethodEnum = "POST"
	UpdateServiceRequestBodyWebhooksOnMessageSentMethodEnumPatch  UpdateServiceRequestBodyWebhooksOnMessageSentMethodEnum = "PATCH"
	UpdateServiceRequestBodyWebhooksOnMessageSentMethodEnumPut    UpdateServiceRequestBodyWebhooksOnMessageSentMethodEnum = "PUT"
	UpdateServiceRequestBodyWebhooksOnMessageSentMethodEnumDelete UpdateServiceRequestBodyWebhooksOnMessageSentMethodEnum = "DELETE"
)

type UpdateServiceRequestBodyWebhooksOnMessageUpdateMethodEnum string

const (
	UpdateServiceRequestBodyWebhooksOnMessageUpdateMethodEnumHead   UpdateServiceRequestBodyWebhooksOnMessageUpdateMethodEnum = "HEAD"
	UpdateServiceRequestBodyWebhooksOnMessageUpdateMethodEnumGet    UpdateServiceRequestBodyWebhooksOnMessageUpdateMethodEnum = "GET"
	UpdateServiceRequestBodyWebhooksOnMessageUpdateMethodEnumPost   UpdateServiceRequestBodyWebhooksOnMessageUpdateMethodEnum = "POST"
	UpdateServiceRequestBodyWebhooksOnMessageUpdateMethodEnumPatch  UpdateServiceRequestBodyWebhooksOnMessageUpdateMethodEnum = "PATCH"
	UpdateServiceRequestBodyWebhooksOnMessageUpdateMethodEnumPut    UpdateServiceRequestBodyWebhooksOnMessageUpdateMethodEnum = "PUT"
	UpdateServiceRequestBodyWebhooksOnMessageUpdateMethodEnumDelete UpdateServiceRequestBodyWebhooksOnMessageUpdateMethodEnum = "DELETE"
)

type UpdateServiceRequestBodyWebhooksOnMessageUpdatedMethodEnum string

const (
	UpdateServiceRequestBodyWebhooksOnMessageUpdatedMethodEnumHead   UpdateServiceRequestBodyWebhooksOnMessageUpdatedMethodEnum = "HEAD"
	UpdateServiceRequestBodyWebhooksOnMessageUpdatedMethodEnumGet    UpdateServiceRequestBodyWebhooksOnMessageUpdatedMethodEnum = "GET"
	UpdateServiceRequestBodyWebhooksOnMessageUpdatedMethodEnumPost   UpdateServiceRequestBodyWebhooksOnMessageUpdatedMethodEnum = "POST"
	UpdateServiceRequestBodyWebhooksOnMessageUpdatedMethodEnumPatch  UpdateServiceRequestBodyWebhooksOnMessageUpdatedMethodEnum = "PATCH"
	UpdateServiceRequestBodyWebhooksOnMessageUpdatedMethodEnumPut    UpdateServiceRequestBodyWebhooksOnMessageUpdatedMethodEnum = "PUT"
	UpdateServiceRequestBodyWebhooksOnMessageUpdatedMethodEnumDelete UpdateServiceRequestBodyWebhooksOnMessageUpdatedMethodEnum = "DELETE"
)

type UpdateServiceRequestBodyUpdateServiceRequest struct {
	ConsumptionReportInterval               *int64                                                        `form:"name=ConsumptionReportInterval"`
	DefaultChannelCreatorRoleSid            *string                                                       `form:"name=DefaultChannelCreatorRoleSid"`
	DefaultChannelRoleSid                   *string                                                       `form:"name=DefaultChannelRoleSid"`
	DefaultServiceRoleSid                   *string                                                       `form:"name=DefaultServiceRoleSid"`
	FriendlyName                            *string                                                       `form:"name=FriendlyName"`
	LimitsChannelMembers                    *int64                                                        `form:"name=Limits.ChannelMembers"`
	LimitsUserChannels                      *int64                                                        `form:"name=Limits.UserChannels"`
	NotificationsAddedToChannelEnabled      *bool                                                         `form:"name=Notifications.AddedToChannel.Enabled"`
	NotificationsAddedToChannelTemplate     *string                                                       `form:"name=Notifications.AddedToChannel.Template"`
	NotificationsInvitedToChannelEnabled    *bool                                                         `form:"name=Notifications.InvitedToChannel.Enabled"`
	NotificationsInvitedToChannelTemplate   *string                                                       `form:"name=Notifications.InvitedToChannel.Template"`
	NotificationsNewMessageEnabled          *bool                                                         `form:"name=Notifications.NewMessage.Enabled"`
	NotificationsNewMessageTemplate         *string                                                       `form:"name=Notifications.NewMessage.Template"`
	NotificationsRemovedFromChannelEnabled  *bool                                                         `form:"name=Notifications.RemovedFromChannel.Enabled"`
	NotificationsRemovedFromChannelTemplate *string                                                       `form:"name=Notifications.RemovedFromChannel.Template"`
	PostWebhookURL                          *string                                                       `form:"name=PostWebhookUrl"`
	PreWebhookURL                           *string                                                       `form:"name=PreWebhookUrl"`
	ReachabilityEnabled                     *bool                                                         `form:"name=ReachabilityEnabled"`
	ReadStatusEnabled                       *bool                                                         `form:"name=ReadStatusEnabled"`
	TypingIndicatorTimeout                  *int64                                                        `form:"name=TypingIndicatorTimeout"`
	WebhookFilters                          []string                                                      `form:"name=WebhookFilters"`
	WebhookMethod                           *UpdateServiceRequestBodyWebhookMethodEnum                    `form:"name=WebhookMethod"`
	WebhooksOnChannelAddMethod              *UpdateServiceRequestBodyWebhooksOnChannelAddMethodEnum       `form:"name=Webhooks.OnChannelAdd.Method"`
	WebhooksOnChannelAddURL                 *string                                                       `form:"name=Webhooks.OnChannelAdd.Url"`
	WebhooksOnChannelAddedMethod            *UpdateServiceRequestBodyWebhooksOnChannelAddedMethodEnum     `form:"name=Webhooks.OnChannelAdded.Method"`
	WebhooksOnChannelAddedURL               *string                                                       `form:"name=Webhooks.OnChannelAdded.Url"`
	WebhooksOnChannelDestroyMethod          *UpdateServiceRequestBodyWebhooksOnChannelDestroyMethodEnum   `form:"name=Webhooks.OnChannelDestroy.Method"`
	WebhooksOnChannelDestroyURL             *string                                                       `form:"name=Webhooks.OnChannelDestroy.Url"`
	WebhooksOnChannelDestroyedMethod        *UpdateServiceRequestBodyWebhooksOnChannelDestroyedMethodEnum `form:"name=Webhooks.OnChannelDestroyed.Method"`
	WebhooksOnChannelDestroyedURL           *string                                                       `form:"name=Webhooks.OnChannelDestroyed.Url"`
	WebhooksOnChannelUpdateMethod           *UpdateServiceRequestBodyWebhooksOnChannelUpdateMethodEnum    `form:"name=Webhooks.OnChannelUpdate.Method"`
	WebhooksOnChannelUpdateURL              *string                                                       `form:"name=Webhooks.OnChannelUpdate.Url"`
	WebhooksOnChannelUpdatedMethod          *UpdateServiceRequestBodyWebhooksOnChannelUpdatedMethodEnum   `form:"name=Webhooks.OnChannelUpdated.Method"`
	WebhooksOnChannelUpdatedURL             *string                                                       `form:"name=Webhooks.OnChannelUpdated.Url"`
	WebhooksOnMemberAddMethod               *UpdateServiceRequestBodyWebhooksOnMemberAddMethodEnum        `form:"name=Webhooks.OnMemberAdd.Method"`
	WebhooksOnMemberAddURL                  *string                                                       `form:"name=Webhooks.OnMemberAdd.Url"`
	WebhooksOnMemberAddedMethod             *UpdateServiceRequestBodyWebhooksOnMemberAddedMethodEnum      `form:"name=Webhooks.OnMemberAdded.Method"`
	WebhooksOnMemberAddedURL                *string                                                       `form:"name=Webhooks.OnMemberAdded.Url"`
	WebhooksOnMemberRemoveMethod            *UpdateServiceRequestBodyWebhooksOnMemberRemoveMethodEnum     `form:"name=Webhooks.OnMemberRemove.Method"`
	WebhooksOnMemberRemoveURL               *string                                                       `form:"name=Webhooks.OnMemberRemove.Url"`
	WebhooksOnMemberRemovedMethod           *UpdateServiceRequestBodyWebhooksOnMemberRemovedMethodEnum    `form:"name=Webhooks.OnMemberRemoved.Method"`
	WebhooksOnMemberRemovedURL              *string                                                       `form:"name=Webhooks.OnMemberRemoved.Url"`
	WebhooksOnMessageRemoveMethod           *UpdateServiceRequestBodyWebhooksOnMessageRemoveMethodEnum    `form:"name=Webhooks.OnMessageRemove.Method"`
	WebhooksOnMessageRemoveURL              *string                                                       `form:"name=Webhooks.OnMessageRemove.Url"`
	WebhooksOnMessageRemovedMethod          *UpdateServiceRequestBodyWebhooksOnMessageRemovedMethodEnum   `form:"name=Webhooks.OnMessageRemoved.Method"`
	WebhooksOnMessageRemovedURL             *string                                                       `form:"name=Webhooks.OnMessageRemoved.Url"`
	WebhooksOnMessageSendMethod             *UpdateServiceRequestBodyWebhooksOnMessageSendMethodEnum      `form:"name=Webhooks.OnMessageSend.Method"`
	WebhooksOnMessageSendURL                *string                                                       `form:"name=Webhooks.OnMessageSend.Url"`
	WebhooksOnMessageSentMethod             *UpdateServiceRequestBodyWebhooksOnMessageSentMethodEnum      `form:"name=Webhooks.OnMessageSent.Method"`
	WebhooksOnMessageSentURL                *string                                                       `form:"name=Webhooks.OnMessageSent.Url"`
	WebhooksOnMessageUpdateMethod           *UpdateServiceRequestBodyWebhooksOnMessageUpdateMethodEnum    `form:"name=Webhooks.OnMessageUpdate.Method"`
	WebhooksOnMessageUpdateURL              *string                                                       `form:"name=Webhooks.OnMessageUpdate.Url"`
	WebhooksOnMessageUpdatedMethod          *UpdateServiceRequestBodyWebhooksOnMessageUpdatedMethodEnum   `form:"name=Webhooks.OnMessageUpdated.Method"`
	WebhooksOnMessageUpdatedURL             *string                                                       `form:"name=Webhooks.OnMessageUpdated.Url"`
}

type UpdateServiceSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateServiceRequest struct {
	ServerURL  *string
	PathParams UpdateServicePathParams
	Request    *UpdateServiceRequestBodyUpdateServiceRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateServiceSecurity
}

type UpdateServiceResponse struct {
	ContentType   string
	StatusCode    int64
	ChatV1Service *shared.ChatV1Service
}
