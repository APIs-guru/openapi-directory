from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_SERVICE_SERVERS = [
	"https://notify.twilio.com",
]


@dataclass
class UpdateServicePathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateServiceRequestBodyUpdateServiceRequest:
    alexa_skill_id: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'AlexaSkillId' }})
    apn_credential_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'ApnCredentialSid' }})
    default_alexa_notification_protocol_version: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'DefaultAlexaNotificationProtocolVersion' }})
    default_apn_notification_protocol_version: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'DefaultApnNotificationProtocolVersion' }})
    default_fcm_notification_protocol_version: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'DefaultFcmNotificationProtocolVersion' }})
    default_gcm_notification_protocol_version: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'DefaultGcmNotificationProtocolVersion' }})
    delivery_callback_enabled: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'DeliveryCallbackEnabled' }})
    delivery_callback_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'DeliveryCallbackUrl' }})
    facebook_messenger_page_id: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FacebookMessengerPageId' }})
    fcm_credential_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FcmCredentialSid' }})
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    gcm_credential_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'GcmCredentialSid' }})
    log_enabled: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'LogEnabled' }})
    messaging_service_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'MessagingServiceSid' }})
    

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
    notify_v1_service: Optional[shared.NotifyV1Service] = field(default=None)
    
