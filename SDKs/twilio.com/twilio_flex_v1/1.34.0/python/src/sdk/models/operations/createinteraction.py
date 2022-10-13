from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_INTERACTION_SERVERS = [
	"https://flex-api.twilio.com",
]


@dataclass
class CreateInteractionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateInteractionRequest:
    server_url: Optional[str] = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateInteractionSecurity = field(default=None)
    

@dataclass
class CreateInteractionResponses:
    flex_v1_interaction: Optional[shared.FlexV1Interaction] = field(default=None)
    

@dataclass
class CreateInteractionResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateInteractionResponses]] = field(default=None)
    status_code: int = field(default=None)
    
