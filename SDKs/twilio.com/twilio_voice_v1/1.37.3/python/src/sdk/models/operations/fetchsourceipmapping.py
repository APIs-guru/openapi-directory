from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_SOURCE_IP_MAPPING_SERVERS = [
	"https://voice.twilio.com",
]


@dataclass
class FetchSourceIPMappingPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchSourceIPMappingSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchSourceIPMappingRequest:
    path_params: FetchSourceIPMappingPathParams = field()
    security: FetchSourceIPMappingSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchSourceIPMappingResponse:
    content_type: str = field()
    status_code: int = field()
    voice_v1_source_ip_mapping: Optional[shared.VoiceV1SourceIPMapping] = field(default=None)
    
