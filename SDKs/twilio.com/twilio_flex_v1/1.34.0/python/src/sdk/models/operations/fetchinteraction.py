from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_INTERACTION_SERVERS = [
	"https://flex-api.twilio.com",
]


@dataclass
class FetchInteractionPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchInteractionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchInteractionRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchInteractionPathParams = field(default=None)
    security: FetchInteractionSecurity = field(default=None)
    

@dataclass
class FetchInteractionResponses:
    flex_v1_interaction: Optional[shared.FlexV1Interaction] = field(default=None)
    

@dataclass
class FetchInteractionResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchInteractionResponses]] = field(default=None)
    status_code: int = field(default=None)
    
