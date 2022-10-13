from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared
UPDATE_SERVICE_SERVERS = [
	"https://chat.twilio.com",
]


@dataclass
class UpdateServicePathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    
class UpdateServiceRequestBodyWebhookMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class UpdateServiceRequestBodyWebhooksOnChannelAddMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class UpdateServiceRequestBodyWebhooksOnChannelAddedMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class UpdateServiceRequestBodyWebhooksOnChannelDestroyMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class UpdateServiceRequestBodyWebhooksOnChannelDestroyedMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class UpdateServiceRequestBodyWebhooksOnChannelUpdateMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class UpdateServiceRequestBodyWebhooksOnChannelUpdatedMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class UpdateServiceRequestBodyWebhooksOnMemberAddMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class UpdateServiceRequestBodyWebhooksOnMemberAddedMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class UpdateServiceRequestBodyWebhooksOnMemberRemoveMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class UpdateServiceRequestBodyWebhooksOnMemberRemovedMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class UpdateServiceRequestBodyWebhooksOnMessageRemoveMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class UpdateServiceRequestBodyWebhooksOnMessageRemovedMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class UpdateServiceRequestBodyWebhooksOnMessageSendMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class UpdateServiceRequestBodyWebhooksOnMessageSentMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class UpdateServiceRequestBodyWebhooksOnMessageUpdateMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class UpdateServiceRequestBodyWebhooksOnMessageUpdatedMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclass
class UpdateServiceRequestBodyUpdateServiceRequest:
    consumption_report_interval: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'ConsumptionReportInterval' }})
    default_channel_creator_role_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'DefaultChannelCreatorRoleSid' }})
    default_channel_role_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'DefaultChannelRoleSid' }})
    default_service_role_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'DefaultServiceRoleSid' }})
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    limits_channel_members: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'Limits.ChannelMembers' }})
    limits_user_channels: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'Limits.UserChannels' }})
    notifications_added_to_channel_enabled: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'Notifications.AddedToChannel.Enabled' }})
    notifications_added_to_channel_template: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Notifications.AddedToChannel.Template' }})
    notifications_invited_to_channel_enabled: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'Notifications.InvitedToChannel.Enabled' }})
    notifications_invited_to_channel_template: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Notifications.InvitedToChannel.Template' }})
    notifications_new_message_enabled: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'Notifications.NewMessage.Enabled' }})
    notifications_new_message_template: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Notifications.NewMessage.Template' }})
    notifications_removed_from_channel_enabled: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'Notifications.RemovedFromChannel.Enabled' }})
    notifications_removed_from_channel_template: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Notifications.RemovedFromChannel.Template' }})
    post_webhook_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'PostWebhookUrl' }})
    pre_webhook_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'PreWebhookUrl' }})
    reachability_enabled: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'ReachabilityEnabled' }})
    read_status_enabled: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'ReadStatusEnabled' }})
    typing_indicator_timeout: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'TypingIndicatorTimeout' }})
    webhook_filters: Optional[List[str]] = field(default=None, metadata={'form': { 'field_name': 'WebhookFilters' }})
    webhook_method: Optional[UpdateServiceRequestBodyWebhookMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'WebhookMethod' }})
    webhooks_on_channel_add_method: Optional[UpdateServiceRequestBodyWebhooksOnChannelAddMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'Webhooks.OnChannelAdd.Method' }})
    webhooks_on_channel_add_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Webhooks.OnChannelAdd.Url' }})
    webhooks_on_channel_added_method: Optional[UpdateServiceRequestBodyWebhooksOnChannelAddedMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'Webhooks.OnChannelAdded.Method' }})
    webhooks_on_channel_added_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Webhooks.OnChannelAdded.Url' }})
    webhooks_on_channel_destroy_method: Optional[UpdateServiceRequestBodyWebhooksOnChannelDestroyMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'Webhooks.OnChannelDestroy.Method' }})
    webhooks_on_channel_destroy_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Webhooks.OnChannelDestroy.Url' }})
    webhooks_on_channel_destroyed_method: Optional[UpdateServiceRequestBodyWebhooksOnChannelDestroyedMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'Webhooks.OnChannelDestroyed.Method' }})
    webhooks_on_channel_destroyed_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Webhooks.OnChannelDestroyed.Url' }})
    webhooks_on_channel_update_method: Optional[UpdateServiceRequestBodyWebhooksOnChannelUpdateMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'Webhooks.OnChannelUpdate.Method' }})
    webhooks_on_channel_update_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Webhooks.OnChannelUpdate.Url' }})
    webhooks_on_channel_updated_method: Optional[UpdateServiceRequestBodyWebhooksOnChannelUpdatedMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'Webhooks.OnChannelUpdated.Method' }})
    webhooks_on_channel_updated_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Webhooks.OnChannelUpdated.Url' }})
    webhooks_on_member_add_method: Optional[UpdateServiceRequestBodyWebhooksOnMemberAddMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'Webhooks.OnMemberAdd.Method' }})
    webhooks_on_member_add_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Webhooks.OnMemberAdd.Url' }})
    webhooks_on_member_added_method: Optional[UpdateServiceRequestBodyWebhooksOnMemberAddedMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'Webhooks.OnMemberAdded.Method' }})
    webhooks_on_member_added_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Webhooks.OnMemberAdded.Url' }})
    webhooks_on_member_remove_method: Optional[UpdateServiceRequestBodyWebhooksOnMemberRemoveMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'Webhooks.OnMemberRemove.Method' }})
    webhooks_on_member_remove_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Webhooks.OnMemberRemove.Url' }})
    webhooks_on_member_removed_method: Optional[UpdateServiceRequestBodyWebhooksOnMemberRemovedMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'Webhooks.OnMemberRemoved.Method' }})
    webhooks_on_member_removed_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Webhooks.OnMemberRemoved.Url' }})
    webhooks_on_message_remove_method: Optional[UpdateServiceRequestBodyWebhooksOnMessageRemoveMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'Webhooks.OnMessageRemove.Method' }})
    webhooks_on_message_remove_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Webhooks.OnMessageRemove.Url' }})
    webhooks_on_message_removed_method: Optional[UpdateServiceRequestBodyWebhooksOnMessageRemovedMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'Webhooks.OnMessageRemoved.Method' }})
    webhooks_on_message_removed_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Webhooks.OnMessageRemoved.Url' }})
    webhooks_on_message_send_method: Optional[UpdateServiceRequestBodyWebhooksOnMessageSendMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'Webhooks.OnMessageSend.Method' }})
    webhooks_on_message_send_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Webhooks.OnMessageSend.Url' }})
    webhooks_on_message_sent_method: Optional[UpdateServiceRequestBodyWebhooksOnMessageSentMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'Webhooks.OnMessageSent.Method' }})
    webhooks_on_message_sent_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Webhooks.OnMessageSent.Url' }})
    webhooks_on_message_update_method: Optional[UpdateServiceRequestBodyWebhooksOnMessageUpdateMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'Webhooks.OnMessageUpdate.Method' }})
    webhooks_on_message_update_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Webhooks.OnMessageUpdate.Url' }})
    webhooks_on_message_updated_method: Optional[UpdateServiceRequestBodyWebhooksOnMessageUpdatedMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'Webhooks.OnMessageUpdated.Method' }})
    webhooks_on_message_updated_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Webhooks.OnMessageUpdated.Url' }})
    

@dataclass
class UpdateServiceSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateServiceRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateServicePathParams = field(default=None)
    request: Optional[UpdateServiceRequestBodyUpdateServiceRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateServiceSecurity = field(default=None)
    

@dataclass
class UpdateServiceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    chat_v1_service: Optional[shared.ChatV1Service] = field(default=None)
    
