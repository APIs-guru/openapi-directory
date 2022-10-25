from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_SOURCE_IP_MAPPING_SERVERS = [
	"https://voice.twilio.com",
]


@dataclass
class CreateSourceIPMappingCreateSourceIPMappingRequest:
    ip_record_sid: str = field(default=None, metadata={'form': { 'field_name': 'IpRecordSid' }})
    sip_domain_sid: str = field(default=None, metadata={'form': { 'field_name': 'SipDomainSid' }})
    

@dataclass
class CreateSourceIPMappingSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateSourceIPMappingRequest:
    server_url: Optional[str] = field(default=None)
    request: Optional[CreateSourceIPMappingCreateSourceIPMappingRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateSourceIPMappingSecurity = field(default=None)
    

@dataclass
class CreateSourceIPMappingResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    voice_v1_source_ip_mapping: Optional[shared.VoiceV1SourceIPMapping] = field(default=None)
    
