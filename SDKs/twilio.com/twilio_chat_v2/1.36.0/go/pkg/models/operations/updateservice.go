package operations

import (
"openapi/pkg/models/shared")
var UpdateServiceServers = []string{
	"https://chat.twilio.com",
}

type UpdateServicePathParams struct {
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}


type UpdateServiceUpdateServiceRequestWebhookMethodEnum string

const (
    UpdateServiceUpdateServiceRequestWebhookMethodEnumHead UpdateServiceUpdateServiceRequestWebhookMethodEnum = "HEAD"
UpdateServiceUpdateServiceRequestWebhookMethodEnumGet UpdateServiceUpdateServiceRequestWebhookMethodEnum = "GET"
UpdateServiceUpdateServiceRequestWebhookMethodEnumPost UpdateServiceUpdateServiceRequestWebhookMethodEnum = "POST"
UpdateServiceUpdateServiceRequestWebhookMethodEnumPatch UpdateServiceUpdateServiceRequestWebhookMethodEnum = "PATCH"
UpdateServiceUpdateServiceRequestWebhookMethodEnumPut UpdateServiceUpdateServiceRequestWebhookMethodEnum = "PUT"
UpdateServiceUpdateServiceRequestWebhookMethodEnumDelete UpdateServiceUpdateServiceRequestWebhookMethodEnum = "DELETE"
)


type UpdateServiceUpdateServiceRequest struct {
    ConsumptionReportInterval *int64 `form:"name=ConsumptionReportInterval"`
    DefaultChannelCreatorRoleSid *string `form:"name=DefaultChannelCreatorRoleSid"`
    DefaultChannelRoleSid *string `form:"name=DefaultChannelRoleSid"`
    DefaultServiceRoleSid *string `form:"name=DefaultServiceRoleSid"`
    FriendlyName *string `form:"name=FriendlyName"`
    LimitsChannelMembers *int64 `form:"name=Limits.ChannelMembers"`
    LimitsUserChannels *int64 `form:"name=Limits.UserChannels"`
    MediaCompatibilityMessage *string `form:"name=Media.CompatibilityMessage"`
    NotificationsAddedToChannelEnabled *bool `form:"name=Notifications.AddedToChannel.Enabled"`
    NotificationsAddedToChannelSound *string `form:"name=Notifications.AddedToChannel.Sound"`
    NotificationsAddedToChannelTemplate *string `form:"name=Notifications.AddedToChannel.Template"`
    NotificationsInvitedToChannelEnabled *bool `form:"name=Notifications.InvitedToChannel.Enabled"`
    NotificationsInvitedToChannelSound *string `form:"name=Notifications.InvitedToChannel.Sound"`
    NotificationsInvitedToChannelTemplate *string `form:"name=Notifications.InvitedToChannel.Template"`
    NotificationsLogEnabled *bool `form:"name=Notifications.LogEnabled"`
    NotificationsNewMessageBadgeCountEnabled *bool `form:"name=Notifications.NewMessage.BadgeCountEnabled"`
    NotificationsNewMessageEnabled *bool `form:"name=Notifications.NewMessage.Enabled"`
    NotificationsNewMessageSound *string `form:"name=Notifications.NewMessage.Sound"`
    NotificationsNewMessageTemplate *string `form:"name=Notifications.NewMessage.Template"`
    NotificationsRemovedFromChannelEnabled *bool `form:"name=Notifications.RemovedFromChannel.Enabled"`
    NotificationsRemovedFromChannelSound *string `form:"name=Notifications.RemovedFromChannel.Sound"`
    NotificationsRemovedFromChannelTemplate *string `form:"name=Notifications.RemovedFromChannel.Template"`
    PostWebhookRetryCount *int64 `form:"name=PostWebhookRetryCount"`
    PostWebhookURL *string `form:"name=PostWebhookUrl"`
    PreWebhookRetryCount *int64 `form:"name=PreWebhookRetryCount"`
    PreWebhookURL *string `form:"name=PreWebhookUrl"`
    ReachabilityEnabled *bool `form:"name=ReachabilityEnabled"`
    ReadStatusEnabled *bool `form:"name=ReadStatusEnabled"`
    TypingIndicatorTimeout *int64 `form:"name=TypingIndicatorTimeout"`
    WebhookFilters []string `form:"name=WebhookFilters"`
    WebhookMethod *UpdateServiceUpdateServiceRequestWebhookMethodEnum `form:"name=WebhookMethod"`
    
}

type UpdateServiceSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type UpdateServiceRequest struct {
    ServerURL *string 
    PathParams UpdateServicePathParams 
    Request *UpdateServiceUpdateServiceRequest `request:"mediaType=application/x-www-form-urlencoded"`
    Security UpdateServiceSecurity 
    
}

type UpdateServiceResponse struct {
    ContentType string 
    StatusCode int64 
    ChatV2Service *shared.ChatV2Service 
    
}

