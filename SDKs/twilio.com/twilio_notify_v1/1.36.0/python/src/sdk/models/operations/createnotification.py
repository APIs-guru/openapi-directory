from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from sdk.models import shared
CREATE_NOTIFICATION_SERVERS = [
	"https://notify.twilio.com",
]


@dataclass
class CreateNotificationPathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateNotificationRequestBodyCreateNotificationRequest:
    action: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Action' }})
    alexa: Optional[Any] = field(default=None, metadata={'form': { 'field_name': 'Alexa' }})
    apn: Optional[Any] = field(default=None, metadata={'form': { 'field_name': 'Apn' }})
    body: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Body' }})
    data: Optional[Any] = field(default=None, metadata={'form': { 'field_name': 'Data' }})
    delivery_callback_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'DeliveryCallbackUrl' }})
    facebook_messenger: Optional[Any] = field(default=None, metadata={'form': { 'field_name': 'FacebookMessenger' }})
    fcm: Optional[Any] = field(default=None, metadata={'form': { 'field_name': 'Fcm' }})
    gcm: Optional[Any] = field(default=None, metadata={'form': { 'field_name': 'Gcm' }})
    identity: Optional[List[str]] = field(default=None, metadata={'form': { 'field_name': 'Identity' }})
    priority: Optional[shared.NotificationEnumPriorityEnum] = field(default=None, metadata={'form': { 'field_name': 'Priority' }})
    segment: Optional[List[str]] = field(default=None, metadata={'form': { 'field_name': 'Segment' }})
    sms: Optional[Any] = field(default=None, metadata={'form': { 'field_name': 'Sms' }})
    sound: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Sound' }})
    tag: Optional[List[str]] = field(default=None, metadata={'form': { 'field_name': 'Tag' }})
    title: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Title' }})
    to_binding: Optional[List[str]] = field(default=None, metadata={'form': { 'field_name': 'ToBinding' }})
    ttl: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'Ttl' }})
    

@dataclass
class CreateNotificationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateNotificationRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateNotificationPathParams = field(default=None)
    request: Optional[CreateNotificationRequestBodyCreateNotificationRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateNotificationSecurity = field(default=None)
    

@dataclass
class CreateNotificationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    notify_v1_service_notification: Optional[shared.NotifyV1ServiceNotification] = field(default=None)
    
