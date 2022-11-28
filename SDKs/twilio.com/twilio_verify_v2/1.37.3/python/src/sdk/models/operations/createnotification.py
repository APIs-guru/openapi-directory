from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


CREATE_NOTIFICATION_SERVERS = [
	"https://verify.twilio.com",
]


@dataclass
class CreateNotificationPathParams:
    challenge_sid: str = field(metadata={'path_param': { 'field_name': 'ChallengeSid', 'style': 'simple', 'explode': False }})
    identity: str = field(metadata={'path_param': { 'field_name': 'Identity', 'style': 'simple', 'explode': False }})
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateNotificationCreateNotificationRequest:
    ttl: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'Ttl' }})
    

@dataclass
class CreateNotificationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateNotificationRequest:
    path_params: CreateNotificationPathParams = field()
    security: CreateNotificationSecurity = field()
    request: Optional[CreateNotificationCreateNotificationRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateNotificationResponse:
    content_type: str = field()
    status_code: int = field()
    verify_v2_service_entity_challenge_notification: Optional[shared.VerifyV2ServiceEntityChallengeNotification] = field(default=None)
    
