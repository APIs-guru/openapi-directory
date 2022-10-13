from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_NOTIFICATION_SERVERS = [
	"https://verify.twilio.com",
]


@dataclass
class CreateNotificationPathParams:
    challenge_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ChallengeSid', 'style': 'simple', 'explode': False }})
    identity: str = field(default=None, metadata={'path_param': { 'field_name': 'Identity', 'style': 'simple', 'explode': False }})
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateNotificationRequestBodyCreateNotificationRequest:
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
    verify_v2_service_entity_challenge_notification: Optional[shared.VerifyV2ServiceEntityChallengeNotification] = field(default=None)
    
