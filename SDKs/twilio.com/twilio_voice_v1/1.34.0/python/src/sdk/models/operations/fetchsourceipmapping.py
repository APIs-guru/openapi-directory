from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_SOURCE_IP_MAPPING_SERVERS = [
	"https://voice.twilio.com",
]


@dataclass
class FetchSourceIPMappingPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchSourceIPMappingSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchSourceIPMappingRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchSourceIPMappingPathParams = field(default=None)
    security: FetchSourceIPMappingSecurity = field(default=None)
    

@dataclass
class FetchSourceIPMappingResponses:
    voice_v1_source_ip_mapping: Optional[shared.VoiceV1SourceIPMapping] = field(default=None)
    

@dataclass
class FetchSourceIPMappingResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchSourceIPMappingResponses]] = field(default=None)
    status_code: int = field(default=None)
    
