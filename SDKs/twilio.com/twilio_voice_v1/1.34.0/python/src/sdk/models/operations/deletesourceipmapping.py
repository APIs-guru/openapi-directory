from dataclasses import dataclass, field
from typing import Optional
DELETE_SOURCE_IP_MAPPING_SERVERS = [
	"https://voice.twilio.com",
]


@dataclass
class DeleteSourceIPMappingPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSourceIPMappingSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteSourceIPMappingRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteSourceIPMappingPathParams = field(default=None)
    security: DeleteSourceIPMappingSecurity = field(default=None)
    

@dataclass
class DeleteSourceIPMappingResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
