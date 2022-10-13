from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_SOURCE_IP_MAPPING_SERVERS = [
	"https://voice.twilio.com",
]


@dataclass
class UpdateSourceIPMappingPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateSourceIPMappingRequestBodyUpdateSourceIPMappingRequest:
    sip_domain_sid: str = field(default=None, metadata={'form': { 'field_name': 'SipDomainSid' }})
    

@dataclass
class UpdateSourceIPMappingSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateSourceIPMappingRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateSourceIPMappingPathParams = field(default=None)
    request: Optional[UpdateSourceIPMappingRequestBodyUpdateSourceIPMappingRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateSourceIPMappingSecurity = field(default=None)
    

@dataclass
class UpdateSourceIPMappingResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    voice_v1_source_ip_mapping: Optional[shared.VoiceV1SourceIPMapping] = field(default=None)
    
