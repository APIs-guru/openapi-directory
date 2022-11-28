from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_INTERACTION_SERVERS = [
	"https://flex-api.twilio.com",
]


@dataclass
class FetchInteractionPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchInteractionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchInteractionRequest:
    path_params: FetchInteractionPathParams = field()
    security: FetchInteractionSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchInteractionResponse:
    content_type: str = field()
    status_code: int = field()
    flex_v1_interaction: Optional[shared.FlexV1Interaction] = field(default=None)
    
