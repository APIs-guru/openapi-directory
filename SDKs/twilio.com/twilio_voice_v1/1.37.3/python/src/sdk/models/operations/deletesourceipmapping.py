from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_SOURCE_IP_MAPPING_SERVERS = [
	"https://voice.twilio.com",
]


@dataclass
class DeleteSourceIPMappingPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSourceIPMappingSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteSourceIPMappingRequest:
    path_params: DeleteSourceIPMappingPathParams = field()
    security: DeleteSourceIPMappingSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteSourceIPMappingResponse:
    content_type: str = field()
    status_code: int = field()
    
