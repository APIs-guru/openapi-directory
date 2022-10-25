from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared
UPDATE_SERVICE_SERVERS = [
	"https://chat.twilio.com",
]


@dataclass
class UpdateServicePathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    
class UpdateServiceUpdateServiceRequestWebhookMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class UpdateServiceUpdateServiceRequestWebhooksOnChannelAddMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class UpdateServiceUpdateServiceRequestWebhooksOnChannelAddedMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class UpdateServiceUpdateServiceRequestWebhooksOnChannelDestroyMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class UpdateServiceUpdateServiceRequestWebhooksOnChannelDestroyedMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class UpdateServiceUpdateServiceRequestWebhooksOnChannelUpdateMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class UpdateServiceUpdateServiceRequestWebhooksOnChannelUpdatedMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class UpdateServiceUpdateServiceRequestWebhooksOnMemberAddMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class UpdateServiceUpdateServiceRequestWebhooksOnMemberAddedMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class UpdateServiceUpdateServiceRequestWebhooksOnMemberRemoveMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class UpdateServiceUpdateServiceRequestWebhooksOnMemberRemovedMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class UpdateServiceUpdateServiceRequestWebhooksOnMessageRemoveMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class UpdateServiceUpdateServiceRequestWebhooksOnMessageRemovedMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class UpdateServiceUpdateServiceRequestWebhooksOnMessageSendMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class UpdateServiceUpdateServiceRequestWebhooksOnMessageSentMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class UpdateServiceUpdateServiceRequestWebhooksOnMessageUpdateMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class UpdateServiceUpdateServiceRequestWebhooksOnMessageUpdatedMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclass
class UpdateServiceUpdateServiceRequest:
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
    webhook_method: Optional[UpdateServiceUpdateServiceRequestWebhookMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'WebhookMethod' }})
    webhooks_on_channel_add_method: Optional[UpdateServiceUpdateServiceRequestWebhooksOnChannelAddMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'Webhooks.OnChannelAdd.Method' }})
    webhooks_on_channel_add_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Webhooks.OnChannelAdd.Url' }})
    webhooks_on_channel_added_method: Optional[UpdateServiceUpdateServiceRequestWebhooksOnChannelAddedMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'Webhooks.OnChannelAdded.Method' }})
    webhooks_on_channel_added_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Webhooks.OnChannelAdded.Url' }})
    webhooks_on_channel_destroy_method: Optional[UpdateServiceUpdateServiceRequestWebhooksOnChannelDestroyMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'Webhooks.OnChannelDestroy.Method' }})
    webhooks_on_channel_destroy_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Webhooks.OnChannelDestroy.Url' }})
    webhooks_on_channel_destroyed_method: Optional[UpdateServiceUpdateServiceRequestWebhooksOnChannelDestroyedMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'Webhooks.OnChannelDestroyed.Method' }})
    webhooks_on_channel_destroyed_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Webhooks.OnChannelDestroyed.Url' }})
    webhooks_on_channel_update_method: Optional[UpdateServiceUpdateServiceRequestWebhooksOnChannelUpdateMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'Webhooks.OnChannelUpdate.Method' }})
    webhooks_on_channel_update_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Webhooks.OnChannelUpdate.Url' }})
    webhooks_on_channel_updated_method: Optional[UpdateServiceUpdateServiceRequestWebhooksOnChannelUpdatedMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'Webhooks.OnChannelUpdated.Method' }})
    webhooks_on_channel_updated_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Webhooks.OnChannelUpdated.Url' }})
    webhooks_on_member_add_method: Optional[UpdateServiceUpdateServiceRequestWebhooksOnMemberAddMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'Webhooks.OnMemberAdd.Method' }})
    webhooks_on_member_add_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Webhooks.OnMemberAdd.Url' }})
    webhooks_on_member_added_method: Optional[UpdateServiceUpdateServiceRequestWebhooksOnMemberAddedMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'Webhooks.OnMemberAdded.Method' }})
    webhooks_on_member_added_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Webhooks.OnMemberAdded.Url' }})
    webhooks_on_member_remove_method: Optional[UpdateServiceUpdateServiceRequestWebhooksOnMemberRemoveMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'Webhooks.OnMemberRemove.Method' }})
    webhooks_on_member_remove_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Webhooks.OnMemberRemove.Url' }})
    webhooks_on_member_removed_method: Optional[UpdateServiceUpdateServiceRequestWebhooksOnMemberRemovedMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'Webhooks.OnMemberRemoved.Method' }})
    webhooks_on_member_removed_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Webhooks.OnMemberRemoved.Url' }})
    webhooks_on_message_remove_method: Optional[UpdateServiceUpdateServiceRequestWebhooksOnMessageRemoveMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'Webhooks.OnMessageRemove.Method' }})
    webhooks_on_message_remove_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Webhooks.OnMessageRemove.Url' }})
    webhooks_on_message_removed_method: Optional[UpdateServiceUpdateServiceRequestWebhooksOnMessageRemovedMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'Webhooks.OnMessageRemoved.Method' }})
    webhooks_on_message_removed_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Webhooks.OnMessageRemoved.Url' }})
    webhooks_on_message_send_method: Optional[UpdateServiceUpdateServiceRequestWebhooksOnMessageSendMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'Webhooks.OnMessageSend.Method' }})
    webhooks_on_message_send_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Webhooks.OnMessageSend.Url' }})
    webhooks_on_message_sent_method: Optional[UpdateServiceUpdateServiceRequestWebhooksOnMessageSentMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'Webhooks.OnMessageSent.Method' }})
    webhooks_on_message_sent_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Webhooks.OnMessageSent.Url' }})
    webhooks_on_message_update_method: Optional[UpdateServiceUpdateServiceRequestWebhooksOnMessageUpdateMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'Webhooks.OnMessageUpdate.Method' }})
    webhooks_on_message_update_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Webhooks.OnMessageUpdate.Url' }})
    webhooks_on_message_updated_method: Optional[UpdateServiceUpdateServiceRequestWebhooksOnMessageUpdatedMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'Webhooks.OnMessageUpdated.Method' }})
    webhooks_on_message_updated_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Webhooks.OnMessageUpdated.Url' }})
    

@dataclass
class UpdateServiceSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateServiceRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateServicePathParams = field(default=None)
    request: Optional[UpdateServiceUpdateServiceRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateServiceSecurity = field(default=None)
    

@dataclass
class UpdateServiceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    chat_v1_service: Optional[shared.ChatV1Service] = field(default=None)
    
