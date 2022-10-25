from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared
UPDATE_SIP_DOMAIN_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class UpdateSipDomainPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    
class UpdateSipDomainUpdateSipDomainRequestVoiceFallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class UpdateSipDomainUpdateSipDomainRequestVoiceMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class UpdateSipDomainUpdateSipDomainRequestVoiceStatusCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclass
class UpdateSipDomainUpdateSipDomainRequest:
    byoc_trunk_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'ByocTrunkSid' }})
    domain_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'DomainName' }})
    emergency_caller_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'EmergencyCallerSid' }})
    emergency_calling_enabled: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'EmergencyCallingEnabled' }})
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    secure: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'Secure' }})
    sip_registration: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'SipRegistration' }})
    voice_fallback_method: Optional[UpdateSipDomainUpdateSipDomainRequestVoiceFallbackMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'VoiceFallbackMethod' }})
    voice_fallback_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'VoiceFallbackUrl' }})
    voice_method: Optional[UpdateSipDomainUpdateSipDomainRequestVoiceMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'VoiceMethod' }})
    voice_status_callback_method: Optional[UpdateSipDomainUpdateSipDomainRequestVoiceStatusCallbackMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'VoiceStatusCallbackMethod' }})
    voice_status_callback_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'VoiceStatusCallbackUrl' }})
    voice_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'VoiceUrl' }})
    

@dataclass
class UpdateSipDomainSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateSipDomainRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateSipDomainPathParams = field(default=None)
    request: Optional[UpdateSipDomainUpdateSipDomainRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateSipDomainSecurity = field(default=None)
    

@dataclass
class UpdateSipDomainResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    api_v2010_account_sip_sip_domain: Optional[shared.APIV2010AccountSipSipDomain] = field(default=None)
    
