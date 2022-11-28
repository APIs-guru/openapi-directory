from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


CREATE_INTERACTION_SERVERS = [
	"https://flex-api.twilio.com",
]


@dataclass
class CreateInteractionCreateInteractionRequest:
    channel: Any = field(metadata={'form': { 'field_name': 'Channel' }})
    routing: Any = field(metadata={'form': { 'field_name': 'Routing' }})
    

@dataclass
class CreateInteractionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateInteractionRequest:
    security: CreateInteractionSecurity = field()
    request: Optional[CreateInteractionCreateInteractionRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateInteractionResponse:
    content_type: str = field()
    status_code: int = field()
    flex_v1_interaction: Optional[shared.FlexV1Interaction] = field(default=None)
    
