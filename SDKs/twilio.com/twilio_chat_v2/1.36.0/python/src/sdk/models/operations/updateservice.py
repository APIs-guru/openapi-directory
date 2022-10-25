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


@dataclass
class UpdateServiceUpdateServiceRequest:
    consumption_report_interval: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'ConsumptionReportInterval' }})
    default_channel_creator_role_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'DefaultChannelCreatorRoleSid' }})
    default_channel_role_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'DefaultChannelRoleSid' }})
    default_service_role_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'DefaultServiceRoleSid' }})
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    limits_channel_members: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'Limits.ChannelMembers' }})
    limits_user_channels: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'Limits.UserChannels' }})
    media_compatibility_message: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Media.CompatibilityMessage' }})
    notifications_added_to_channel_enabled: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'Notifications.AddedToChannel.Enabled' }})
    notifications_added_to_channel_sound: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Notifications.AddedToChannel.Sound' }})
    notifications_added_to_channel_template: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Notifications.AddedToChannel.Template' }})
    notifications_invited_to_channel_enabled: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'Notifications.InvitedToChannel.Enabled' }})
    notifications_invited_to_channel_sound: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Notifications.InvitedToChannel.Sound' }})
    notifications_invited_to_channel_template: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Notifications.InvitedToChannel.Template' }})
    notifications_log_enabled: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'Notifications.LogEnabled' }})
    notifications_new_message_badge_count_enabled: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'Notifications.NewMessage.BadgeCountEnabled' }})
    notifications_new_message_enabled: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'Notifications.NewMessage.Enabled' }})
    notifications_new_message_sound: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Notifications.NewMessage.Sound' }})
    notifications_new_message_template: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Notifications.NewMessage.Template' }})
    notifications_removed_from_channel_enabled: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'Notifications.RemovedFromChannel.Enabled' }})
    notifications_removed_from_channel_sound: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Notifications.RemovedFromChannel.Sound' }})
    notifications_removed_from_channel_template: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Notifications.RemovedFromChannel.Template' }})
    post_webhook_retry_count: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'PostWebhookRetryCount' }})
    post_webhook_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'PostWebhookUrl' }})
    pre_webhook_retry_count: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'PreWebhookRetryCount' }})
    pre_webhook_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'PreWebhookUrl' }})
    reachability_enabled: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'ReachabilityEnabled' }})
    read_status_enabled: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'ReadStatusEnabled' }})
    typing_indicator_timeout: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'TypingIndicatorTimeout' }})
    webhook_filters: Optional[List[str]] = field(default=None, metadata={'form': { 'field_name': 'WebhookFilters' }})
    webhook_method: Optional[UpdateServiceUpdateServiceRequestWebhookMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'WebhookMethod' }})
    

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
    chat_v2_service: Optional[shared.ChatV2Service] = field(default=None)
    
