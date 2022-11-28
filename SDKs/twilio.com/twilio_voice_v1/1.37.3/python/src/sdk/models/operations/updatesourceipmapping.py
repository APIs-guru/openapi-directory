from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


UPDATE_SOURCE_IP_MAPPING_SERVERS = [
	"https://voice.twilio.com",
]


@dataclass
class UpdateSourceIPMappingPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateSourceIPMappingUpdateSourceIPMappingRequest:
    sip_domain_sid: str = field(metadata={'form': { 'field_name': 'SipDomainSid' }})
    

@dataclass
class UpdateSourceIPMappingSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateSourceIPMappingRequest:
    path_params: UpdateSourceIPMappingPathParams = field()
    security: UpdateSourceIPMappingSecurity = field()
    request: Optional[UpdateSourceIPMappingUpdateSourceIPMappingRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateSourceIPMappingResponse:
    content_type: str = field()
    status_code: int = field()
    voice_v1_source_ip_mapping: Optional[shared.VoiceV1SourceIPMapping] = field(default=None)
    
