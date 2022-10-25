from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared
CREATE_END_USER_SERVERS = [
	"https://trusthub.twilio.com",
]


@dataclass
class CreateEndUserCreateEndUserRequest:
    attributes: Optional[Any] = field(default=None, metadata={'form': { 'field_name': 'Attributes' }})
    friendly_name: str = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    type: str = field(default=None, metadata={'form': { 'field_name': 'Type' }})
    

@dataclass
class CreateEndUserSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateEndUserRequest:
    server_url: Optional[str] = field(default=None)
    request: Optional[CreateEndUserCreateEndUserRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateEndUserSecurity = field(default=None)
    

@dataclass
class CreateEndUserResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    trusthub_v1_end_user: Optional[shared.TrusthubV1EndUser] = field(default=None)
    
